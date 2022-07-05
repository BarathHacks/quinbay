import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    HomeComponent,
    ProductNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
