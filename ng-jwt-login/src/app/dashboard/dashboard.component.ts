import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RouterLink } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {AdminComponent} from '../admin/admin.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, AdminComponent, UserComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(public authService: AuthService) {}
}
