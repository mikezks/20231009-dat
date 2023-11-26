import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightRowComponent } from './flight-row.component';

describe('FlightRowComponent', () => {
  let component: FlightRowComponent;
  let fixture: ComponentFixture<FlightRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlightRowComponent]
    });
    fixture = TestBed.createComponent(FlightRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
