import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { OccasionsComponent } from './pages/occasions/occasions.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarsContentComponent } from './pages/cars-content/cars-content.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';




@NgModule({
  declarations: [
   NavbarComponent,
   FooterComponent,
   HomeComponent,
   ServicesPageComponent,
   OccasionsComponent,
   CarsComponent,
   CarsContentComponent,
   NotFoundComponent,

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
