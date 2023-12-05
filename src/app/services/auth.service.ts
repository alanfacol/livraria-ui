import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StorageService } from './storage.service';
import { Auth } from '../model/auth.interface';

const API_URL = environment.API_URL; // Obtém o URL da API do arquivo de ambiente

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient,
    private storageService: StorageService) {}

  login(loginForm: any) {
    const loginUrl = `${API_URL}/auth/login`;
    return this.http.post<Auth>(loginUrl, loginForm);
  }

  isLogged(): boolean{
    return this.storageService.get('token') ? true : false;
  }
}
