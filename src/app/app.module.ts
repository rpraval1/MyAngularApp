import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './navbar/nav-bar.component';

import { ItemListComponent } from './ItemList/item-list.component';
import {ItemService} from './ItemList/item.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    ItemListComponent
   ],
   providers: [ ItemService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
