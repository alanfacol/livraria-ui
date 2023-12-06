import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Book } from '../model/book.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartBooks: Book[] = [];

  constructor(private storage: StorageService) {
  }

  init() {
    if (!this.storage.get('cart'))
      this.storage.set('cart', [])
  }

  get(): any {
    return this.storage.get('cart')
  }

  save(book: Book) {
    this.cartBooks = this.storage.get('cart')
    this.cartBooks.push(book)
    this.storage.set('cart', this.cartBooks)
  }

  remove(book: Book) {
    this.cartBooks = this.storage.get('cart')
    this.cartBooks.forEach((bk, index) => {
      if (bk.code == book.code) {
        console.log(index, book)
        this.cartBooks.splice(index)
      }
    })
    this.storage.set('cart', this.cartBooks)
  }

  clean() {
    this.storage.remove('cart')
  }

  count(): number {
    this.cartBooks = this.storage.get('cart')
    return this.cartBooks ? this.cartBooks.length : 0
  }
}
