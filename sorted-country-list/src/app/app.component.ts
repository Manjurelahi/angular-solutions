import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<html><body>{{sortedCountryList}}</body></html>'
})

export class AppComponent implements AfterContentInit {
  title = 'Sorted Country List';
  countryList: string[] = ["Italy", "Luxembourg", "Belgium", "Denmark", "Finland", "France", "Slovakia", "Slovenia", "Germany", "Greece", "Ireland", "Netherlands", "Portugal"];
  sortedCountryList: string = "";

  sort(arr: string[]): string {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr.join(", ");
  }

  ngAfterContentInit(): void {
    this.sortedCountryList = this.sort(this.countryList);
  }
}