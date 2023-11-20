import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent {
  dialogRef = inject(MatDialogRef);
  data = inject<{ flight: Flight }>(MAT_DIALOG_DATA);

  protected flight: Flight = this.data.flight;
  /* {
    id: 999,
    from: 'London',
    to: 'New York',
    date: new Date().toISOString(),
    delayed: false
  }; */

  save(): void {
    console.log(this.flight);
  }

  close(): void {
    this.dialogRef.close();
  }
}
