import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../model/book.interface';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

const API_URL = environment.API_URL; // Obtém o URL da API do arquivo de ambiente


@Injectable({
  providedIn: 'root'
})


export class BookService {
  auth_token: string;

  constructor(private route: Router,
    private http: HttpClient,
    private storage: StorageService) {
    this.auth_token = this.storage.get('token')

  }

  getBooks(): any {
    let books: Book[] = []

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    const booksUrl = `${API_URL}/books`;
    this.http.get<Book[]>(booksUrl, { headers: header }).subscribe(response =>{
      response.forEach(bk =>{
        books.push(bk)
      })
    })

    return books
  }
}
