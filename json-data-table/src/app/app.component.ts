import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgFor, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'JSON Data Table';
  public userData: any;
  
  public constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
	this.http.get('assets/users.json').subscribe((response) => {
		this.userData = response;
	});
  }
  
  deleteUser(user: any): void {
	const userIndex = this.userData.indexOf(user);
	this.userData.splice(userIndex, 1);
  }
}
