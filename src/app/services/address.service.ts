import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { Address } from '../model/address.interface';
import { environment } from '../../environments/environment';

const API_URL = environment.API_URL; // Obtém o URL da API do arquivo de ambiente

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  auth_token: string;

  constructor(private route: Router,
    private http: HttpClient,
    private storage: StorageService) {
    this.auth_token = this.storage.get('token')

  }

  getAddress(): any {
    let address: Address[] = []

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    const addressUrl = `${API_URL}/me/address`;
    this.http.get<Address[]>(addressUrl, { headers: header }).subscribe(response =>{
      response.forEach(addr =>{
        address.push(addr)
      })
    })
    return address
  }
}
