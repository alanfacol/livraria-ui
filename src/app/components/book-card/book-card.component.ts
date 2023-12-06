import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../model/book.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book!: Book;
  
  constructor(private cart: CartService) { 

  }
  
  ngOnInit() { }

  save() {
    this.cart.save(this.book)
    this.book.inCart = true
  }

  remove() {
    this.cart.remove(this.book)
    this.book.inCart = false
  }
}

