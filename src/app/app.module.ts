import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './Général/home/home.component';
import { HeaderComponent } from './Général/header/header.component';
import { FooterComponent } from './Général/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { ServicesComponent } from './pages/services/services.component';
import { OccasionsComponent } from './pages/occasions/occasions.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarsContentComponent } from './pages/cars-content/cars-content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ServicesComponent,
    OccasionsComponent,
    CarsComponent,
    CarsContentComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppModule],
})
export class AppModule { }
