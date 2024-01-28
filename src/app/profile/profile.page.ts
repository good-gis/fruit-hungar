import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertController} from "@ionic/angular";
import {UserService} from "../user.service";
import {Observable, map, take, EMPTY} from "rxjs";
import {LocalstorageService} from "../localstorage.service";
import { User } from '../user';
import {LoadingController} from "@ionic/angular/standalone";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss', '../app.component.scss']
})
export class ProfilePage {

  private user$: Observable<User | null>;
  protected userData: User = {
    name: '',
    surname: '',
    address: '',
    phone: '',
    password: '',
    id: ''
  };

  public profileForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^(?:\+7|8|7)\d{10}$/)]],
    password: ['', Validators.required],
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private localDb: LocalstorageService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.localDb.get('userId').then(value => {
      this.userData.id = value;

      this.user$ = this.userService.getUser(value).valueChanges();
      this.user$.subscribe(user => {
        if (user) {
          console.log(user)
          this.userData.name = user.name;
          this.userData.surname = user.surname;
          this.userData.address = user.address;
          this.userData.phone = user.phone;
          this.userData.password = user.password;
        }
      })
    })
  }

  // Функция для получения ошибок валидации для поля
  getValidationErrors(controlName: string): string[] {
    const control: AbstractControl | null = this.profileForm.get(controlName);
    if (control && control.errors) {
      return Object.keys(control.errors).map((key) => {
        switch (key) {
          case 'required':
            return 'Это поле обязательно для заполнения';
          case 'pattern':
            return 'Неверный формат';
          default:
            return '';
        }
      });
    }
    return [];
  }

  async onSubmit() {
    const loading = await this.loadingCtrl.create();
    loading.present();

    if (this.profileForm.valid) {
      this.userService.getUserIdByPhone(this.profileForm.value.phone).pipe(
        take(1),
        map((userId) => {
          if (userId === null) {
            this.userService.createUser(this.profileForm.value);
            this.alertController.create({
              header: 'Данные профиля успешно сохранены',
              buttons: ['Хорошо'],
            }).then((alert) => {
              alert.present();
            });
            return;
          }
          else {
            this.alertController.create({
              header: 'Авторизуйтесь',
              message: 'Пользователь с таким номером телефона уже существует. Пожалуйста, авторизуйтесь.',
              buttons: ['Хорошо'],
            }).then((alert) => {
              alert.present();
            });
            return EMPTY;
          }
        }),
      ).subscribe(
        {
          next: () => {
            loading.dismiss();
          },
          error: () => {
            this.alertController.create({
              header: 'Произошла ошибка',
              buttons: ['Хорошо'],
            }).then((alert) => {
              alert.present();
            });
            loading.dismiss();
          },
          complete: () => {
            loading.dismiss();
          },
        }
      );
    } else {
      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Профиль заполнен не верно',
        message: 'Проверьте, пожалуйста, корректность введенных данных',
        buttons: ['Хорошо'],
      });

      await alert.present();
    }
  }
}
