import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from '../../model/address.interface';
import { Book } from '../../model/book.interface';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  addresses: Address[] = [
    {
      id: 1,
      public_place: 'Rua A',
      number: '123',
      complement: 'AP 101',
      district: 'Centro',
      city: 'Cidade A',
      state: 'Estado A',
      zip_code: '12345-678'
    },
    {
      id: 2,
      public_place: 'Avenida B',
      number: '456',
      complement: 'Casa',
      district: 'Bairro X',
      city: 'Cidade B',
      state: 'Estado B',
      zip_code: '98765-432'
    },
    {
      id: 3,
      public_place: 'Avenida C',
      number: '789',
      complement: 'Casa',
      district: 'Bairro X',
      city: 'Cidade B',
      state: 'Estado B',
      zip_code: '98765-432'
    }
  ];

  addressSelected!: number
  address!: Address
  books: Book[]


  displayedColumns: string[] = ['public_place', 'number', 'complement', 'district', 'city', 'state', 'select'];

  constructor(private route: Router,
    private cartService: CartService,
    private _snackBar: MatSnackBar) {
    this.books = this.cartService.get()
    this.updateCartValue()
  }

  setSelected(address: Address) {
    this.addressSelected = address.id
    this.address = address
  }

  isSelected(addressId: Address) {
    return addressId.id == this.addressSelected ? true : false;
  }

  saveCart() {
    // enviar dados para o backend
  }

  clearCart() {
    this.cartService.clean()
    this._snackBar.open('Carrinho limpo com sucesso', 'Ok')
    this.route.navigate(['livros'])
  }

  private updateCartValue(){
    let chartBooks: Book[] = this.cartService.get()
    this.books.forEach((book) => {
      chartBooks.forEach((cartBook) => {
          if (cartBook.code == book.code){
            book.inCart = true
          }
      })
    })
  }
}
