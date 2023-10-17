import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import { Observable, of } from 'rxjs';
import { Flight } from '../model/flight';

@Injectable()
export class DummyFlightService {

  find(from: string, to: string): Observable<Flight[]> {
    const flights: Flight[] = [
      {
        id: 999,
        from: 'Graz',
        to: 'Stockholm',
        date: new Date().toISOString(),
        delayed: true
      },
      {
        id: 888,
        from: 'Innsbruck',
        to: 'Rom',
        date: new Date().toISOString(),
        delayed: true
      },
      {
        id: 555,
        from: 'Salzburg',
        to: 'Athen',
        date: new Date().toISOString(),
        delayed: true
      }
    ];

    return of(flights)
  }
}
