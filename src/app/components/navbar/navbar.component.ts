import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { Book } from '../../model/book.interface';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  token$: string | null;
  user: string;
  itensCarrinho: Book[] = []

  constructor(private storageService: StorageService,
    private route: Router,
    private cartService: CartService) {
    this.token$ = this.storageService.get('token');
    this.user = "Alan";
  }

  openUserMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  countItems(): number {
    return this.cartService.count()
  }

  logout() {
    this.storageService.clear();
    this.route.navigate(["/login"]);
  }
}
