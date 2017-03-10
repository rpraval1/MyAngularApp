import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
