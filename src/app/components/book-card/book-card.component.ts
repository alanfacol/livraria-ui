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
  private isInCart: boolean;
  
  constructor(private cart: CartService) { 
    this.isInCart = false;
  }
  
  ngOnInit() { }

  save() {
    this.cart.save(this.book)
    this.isInCart = true;
  }

  remove() {
    this.cart.remove(this.book)
    this.isInCart = false;
  }

  isInChart(): boolean {return this.isInCart}
}

