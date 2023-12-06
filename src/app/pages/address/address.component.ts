import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../../model/address.interface';
import { Book } from '../../model/book.interface';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaleService } from '../../services/sale.service';
import { Sale, Pack } from '../../model/sale.interface';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit{
  addresses: Address[] = []
  addressSelected!: number
  address!: Address
  sale!: Sale
  books: Book[]

  totalAmount: number = 0
  totalValue: number = 0

  displayedColumns: string[] = ['public_place', 'number', 'complement', 'district', 'city', 'state', 'select'];

  constructor(private router: Router,
    private cartService: CartService,
    private saleService: SaleService,
    private addressService: AddressService,
    private _snackBar: MatSnackBar) {
    this.books = this.cartService.get()
    this.updateCartValue()
    this.sumAmount()
    
  }
  ngOnInit() {
    this.addresses =  this.addressService.getAddress();
  }

  setSelected(address: Address) {
    this.addressSelected = address.id
    this.address = address
  }

  isSelected(addressId: Address) {
    return addressId.id == this.addressSelected ? true : false;
  }

  sumAmount(){
    this.books.forEach((book) =>{
      this.totalAmount += 1;
      this.totalValue += book.value
    })
  }

  saveCart(): any{
    this.sale.addressId = this.address.id

    this.books.forEach(book =>{
      let pack!: Pack
      pack.book = book.code;
      pack.amount = 1;
      this.sale.booksCode.push(pack);
    })

    this.saleService.buy(this.sale).subscribe({
      next: (response) => {
        this._snackBar.open('Venda realizada com sucesso', 'Ok')
        this.router.navigate(['livros'])
      },
      error: (error) => {
        console.log(error)
        this._snackBar.open('Venda falhou', 'Ok')
      }
    })
  }

  clearCart() {
    this.cartService.clean()
    this._snackBar.open('Carrinho limpo com sucesso', 'Ok')
    this.router.navigate(['livros'])
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
