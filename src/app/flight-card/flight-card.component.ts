import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight, initialFlight } from '../model/flight';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent {
  @Input() item = initialFlight;
  @Input() selected = false;

  toggleSelection(): void {
    this.selected = !this.selected;
  }
}
