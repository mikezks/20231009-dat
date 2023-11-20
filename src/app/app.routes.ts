import { Routes } from "@angular/router";
import { HomeComponent } from "./core/features/home/home.component";
import { FlightSearchComponent } from "./flight-booking/features/flight-search/flight-search.component";
import { FlightEditComponent } from "./flight-booking/features/flight-edit/flight-edit.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]
