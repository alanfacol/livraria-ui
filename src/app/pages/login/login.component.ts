// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../model/auth.interface';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm!: FormGroup;
  login!: Login;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private storage: StorageService,
    private router: Router) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData: Login = this.loginForm.value as Login;

      this.authService.login(loginData).subscribe({
        next: (response) => {
          this.storage.set('token', response.token)
          this.router.navigate(['livros'])
        },
        error: (error) => {
          console.log(error)
          this.errorMessage = "Credencias inválidas!"
          setTimeout(() => {
            this.errorMessage = '';
          }, 1500);
        }
      })
    }
  }
}
