import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { NavBarComponent } from './nav-bar.component';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
