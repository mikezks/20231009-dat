import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Flight, initialFlight } from '../model/flight';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  private http = inject(HttpClient);

  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined

  search(): void {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http.get<Flight[]>(url, { params, headers })
      .subscribe({
        next: flights => this.flights = flights,
        error: err => console.error('Error on loading flights', err)
      });
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

  demo(): void {
    // Lambda Expression
    const serverCallback = (flights: Flight[]) => {
      this.flights = flights
    };

    const that = this;
    // JavaScript Function
    function serverCallback2(flights: Flight[]) {
      that.flights = flights
    }
  }
}


