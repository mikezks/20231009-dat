import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFlight } from '../model/flight';

@Component({
  selector: 'tr[flightRow]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-row.component.html',
  styleUrls: ['./flight-row.component.css']
})
export class FlightRowComponent {
  @Input() flight = initFlight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
