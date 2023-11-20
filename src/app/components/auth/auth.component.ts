import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {GunService} from "../../services/gun.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  authForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  showPassword = false;


  constructor(private gunService: GunService) {
  }

  logIn() {
    if (this.validateForm()) {
      this.gunService.signIn(this.authForm.value.username, this.authForm.value.password);
    }
  }

  signUp() {
    if (this.validateForm()) {
      this.gunService.createUser(this.authForm.value.username, this.authForm.value.password);
    }
  }

  private validateForm(): boolean {
    if (!this.authForm.valid) {
      alert('Invalid Form');
      return false;
    }
    return true;
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
