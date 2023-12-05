import { Component } from '@angular/core';
import { Book } from '../../model/book.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  constructor(private cartService: CartService){
    this.cartService.init()
  }
  books: Book[] = [
    {
      code: '1',
      name: 'Livro 1',
      description: 'Descrição do Livro 1',
      value: 20.00,
      stock: 5
    },
    {
      code: '2',
      name: 'Livro 2',
      description: 'Descrição do Livro 2',
      value: 25.00,
      stock: 8,
    },
    {
      code: '3',
      name: 'Livro 3',
      description: 'Descrição do Livro 3',
      value: 25.00,
      stock: 8,
    },
  ];
}
