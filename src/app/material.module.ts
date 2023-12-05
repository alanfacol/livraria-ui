import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatInputModule} from '@angular/material/input'
import {MatMenuModule} from '@angular/material/menu'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge'

const material = [
  MatToolbarModule, 
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatIconModule,
  MatBadgeModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }