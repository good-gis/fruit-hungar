import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertController} from "@ionic/angular";
import {UserService} from "../user.service";
import {delay, map} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss', '../app.component.scss']
})
export class ProfilePage {

  public profileForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^(?:\+7|8|7)\d{10}$/)]],
    password: ['', Validators.required],
  });

  constructor(private userService: UserService, private formBuilder: FormBuilder, private alertController: AlertController) {}

  ngOnInit() {}

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
    if (this.profileForm.valid) {
      this.userService.getUserIdByPhone(this.profileForm.value.phone).pipe(
        delay(1000),
        map((userId) => {
          if (!userId) {
            console.log(this.userService.createUser(this.profileForm.value));
          }
        }),
      ).subscribe();
    } else {
      const alert = await this.alertController.create({
        header: 'Профиль заполнен не верно',
        message: 'Проверьте, пожалуйста, корректность введенных данных',
        buttons: ['Хорошо'],
      });

      await alert.present();
    }
  }
}
