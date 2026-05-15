import { Component } from '@angular/core';

import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  errorMessage = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  async login() {

    try {

      await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      this.router.navigate(['/admin']);

    } catch(error: any) {

      this.errorMessage = error.message;
    }
  }
}