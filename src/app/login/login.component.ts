import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInvalid = false;
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(signInForm: NgForm) {
    if(!signInForm.valid) {
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;  
    }
    const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
      if(!this.authenticationService.authenticate(signInData)) {
        this.isFormInvalid = false;
        this.areCredentialsInvalid = true;
      }
    
  }
}
