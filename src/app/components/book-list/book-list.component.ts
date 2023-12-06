import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book.interface';
import { CartService } from '../../services/cart.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books!: Book[]

  constructor(private cartService: CartService,
    private bookService: BookService) {}

  ngOnInit() {
    this.cartService.init()
    this.books = this.bookService.getBooks()
  }
}
