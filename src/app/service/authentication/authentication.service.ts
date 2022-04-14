import { Injectable } from '@angular/core';
import { SignInData } from 'src/app/model/signInData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser: SignInData = new SignInData('abcd@gmail.com', 'test');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.mockUser.getLogin() === signInData.getLogin() && this.mockUser.getPassword() === signInData.getPassword()) {
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}