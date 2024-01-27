import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) {}

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

  onSubmit() {
    if (this.profileForm.valid) {
      // You can access form values using this.formData.value
      console.log('Form submitted:', this.profileForm.value);
      // Here you can call your service method to save user data
    } else {
      console.error('Form is invalid');
    }
  }
}
