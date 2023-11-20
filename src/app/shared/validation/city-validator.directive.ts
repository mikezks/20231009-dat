import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]
})
export class CityValidatorDirective implements Validator {
  private validCities = [
    'Graz', 'London', 'Hamburg'
  ];

  validate(control: AbstractControl<string>): ValidationErrors | null {
    if (control?.value && !this.validCities.includes(control.value)) {
      // Error found: invalid
      return {
        city: {
          validCities: this.validCities,
          actualCity: control.value
        }
      };
    }

    // No Error: valid
    return null;
  }
}
