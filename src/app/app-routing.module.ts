import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Général/home/home.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo:'home', pathMatch: 'full' }, /* path vide ou ** = lien vide redirigé vers la page que je souhaite */
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
