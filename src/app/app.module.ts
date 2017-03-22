import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { MyKitchenComponent } from './myKitchen/my-kitchen.component';

import { ItemListComponent } from './myKitchenItemList/item-list.component';
import { ItemDetailComponent } from './myKitchenItemList/item-detail.component';
import {ItemService} from './myKitchen/item.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    MyKitchenComponent,
    ItemListComponent,
    ItemDetailComponent
   ],
   providers: [ ItemService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
