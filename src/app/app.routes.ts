import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BooksComponent } from './pages/books/books.component';
import { GuardService } from './services/guard.service';
import { AddressComponent } from './pages/address/address.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: SignUpComponent },
  { path: 'livros', component: BooksComponent , canActivate: [GuardService]},
  { path: 'carrinho', component: AddressComponent , canActivate: [GuardService]},
  { path: '**', redirectTo: '/livros'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }