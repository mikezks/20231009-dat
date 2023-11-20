import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NextFlightsModule } from './next-flights/next-flights.module';
import { MatDialogModule } from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(NextFlightsModule),
    importProvidersFrom(MatDialogModule)
  ]
};
