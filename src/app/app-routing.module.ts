import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { OccasionsComponent } from './pages/occasions/occasions.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarsContentComponent } from './pages/cars-content/cars-content.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, /* path vide ou ** = lien vide redirigé vers la page que je souhaite */
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'occasions', component: OccasionsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'cars-content', component: CarsContentComponent },
  { path: '**', component: NotFoundComponent }, //routes pour gérer les routes inexistantes
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
