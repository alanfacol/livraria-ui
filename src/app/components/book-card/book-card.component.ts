import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../model/book.interface';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book!: Book;
  
  constructor(private cart: CartService,
    private _snackBar: MatSnackBar) { 

  }
  
  ngOnInit() { }

  save() {
    let cartBooks: Book[] = this.cart.get()

    cartBooks.forEach(book =>{
      if (book.code == this.book.code){
        this._snackBar.open('Livro já adicionado no carrinho', 'Ok')
      } 
    })

    this.book.inCart = true
    this.cart.save(this.book)
    // this._snackBar.open('Livro adicionado com sucesso', 'Ok')

  }

  remove() {
    this.book.inCart = false
    this.cart.remove(this.book)
  }
}

