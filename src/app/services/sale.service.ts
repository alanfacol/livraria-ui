import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { Sale } from '../model/sale.interface';
import { environment } from '../../environments/environment';

const API_URL = environment.API_URL; // Obtém o URL da API do arquivo de ambiente

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  auth_token: string

  constructor(private http: HttpClient,
    private storage: StorageService,
    private route: Router) { 
      this.auth_token = this.storage.get('token')

    }

    buy(sale: Sale) {
      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth_token}`
      })
  
      const saleUrl = `${API_URL}/me/sales`;
      return this.http.post<Sale[]>(saleUrl, sale, { headers: header })
    }
}
