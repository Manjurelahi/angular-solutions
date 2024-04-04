import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PanRegexDirective } from './directive/pan-regex.directive';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, PanRegexDirective],
  templateUrl: './app.component.html'
})
export class AppComponent {
  protected user = new User();
  title = 'PAN Number Format Validation';
}
