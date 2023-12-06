import { Component } from '@angular/core';
import { SignUp } from '../../model/auth.interface';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';
  signUp!: SignUp;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar) {

    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      birthdate: ['', Validators.required],
      pj: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.loginForm.valid) {
      const signupData: SignUp = this.loginForm.value as SignUp;
      console.log(signupData)

      this.authService.signUp(signupData).subscribe({
        next: (response) => {
            this._snackBar.open('Resgistro realizado com sucesso', 'Ok')
          this.router.navigate(['login'])
        },
        error: (error) => {
          this._snackBar.open('Erro ao realizado registro', 'Ok')
        }
      })
    } else this._snackBar.open('Erro Revise seus dados', 'Ok')
  }

}
