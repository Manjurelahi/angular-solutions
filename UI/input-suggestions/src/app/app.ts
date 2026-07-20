import { CommonModule } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ReactiveFormsModule
],
  templateUrl: './app.html'
})
export class App implements OnInit {
  searchControl = new FormControl('');
  techSkills: string[] = ['Java', 'Java EE', 'Spring Boot', 'Hibernate', 'Angular', 'SQL', 'DevOps'];
  filteredSkills !: Observable<string[]>;
  ngOnInit(): void {
    this.filteredSkills = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this.getSuggestions(value || ''))
    );
  }
  private getSuggestions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.techSkills.filter(skill => skill.toLowerCase().includes(filterValue));
  }
  protected readonly title = signal('Input Suggestions');
}
