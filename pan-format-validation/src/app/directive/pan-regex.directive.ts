import { Directive, Input} from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator
} from '@angular/forms';

@Directive({
    selector: '[panRegex]',
    providers: [{provide: NG_VALIDATORS, useExisting: PanRegexDirective, multi: true}],
    standalone: true
})

export class PanRegexDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
        return regex.test(control.value) ? null : { regExpError: { value: control.value } }
    }    
}