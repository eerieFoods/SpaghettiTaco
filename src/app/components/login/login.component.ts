import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GunService} from "../../services/gun.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showLogin: boolean = true;

  said: string[] = [];

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  speakingForm: FormGroup = new FormGroup({
    said: new FormControl('', Validators.required)
  });

  constructor(private gunService: GunService) {
    this.gunService.gun.on('auth', () => {
      this.showLogin = false;
      this.gunService.getFromUser('said').map().on((data: string, key: string) => {
        this.said.push(data);
      })
    })
  }

  logIn() {
    this.gunService.signIn(this.form.value.username, this.form.value.password);
  }

  signUp() {
    this.gunService.createUser(this.form.value.username, this.form.value.password)
  }

  speak() {
    if (!this.gunService.isLoggedIn()) return;
    this.gunService.getFromUser("said").set(this.speakingForm.value.said);
    this.speakingForm.controls['said'].setValue('');
  }
}
