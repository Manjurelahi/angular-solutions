import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  private router = inject(Router);
  public authService = inject(AuthService);

  public onLogout() {
    this.authService.logout().subscribe({
      next: (res) => {
        console.log('User Logged out!', res);
        this.router.navigate(['logout']).then(value => {
          console.log('Navigated to logged-out page', value);
        })
      },
      error: (err) => console.error('User logout failed', err),
      complete: () => console.log('Logout Completed')
    });
  }
}
