import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string | undefined;
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(['/courses']);
    // Implement login functionality
    // Use this.email and this.password to authenticate the user
  }
}

