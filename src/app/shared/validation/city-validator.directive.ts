import { Directive, Input } from '@angular/core';
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
  @Input() city: string[] = [];

  validate(control: AbstractControl<string>): ValidationErrors | null {
    if (control?.value && !this.city.includes(control.value)) {
      // Error found: invalid
      return {
        city: {
          validCities: this.city,
          actualCity: control.value
        }
      };
    }

    // No Error: valid
    return null;
  }
}
