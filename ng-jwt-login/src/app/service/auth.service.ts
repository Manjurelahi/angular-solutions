import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';
import {inject, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private xsrfTokenExtractor = inject(HttpXsrfTokenExtractor);
  private http: HttpClient = inject(HttpClient)

  xsrfToken: string = "";

  isLoggedInSignal = signal<boolean>(this.isLoggedIn());

  login(credentials: any) {
    return this.http.post("http://localhost:8080/api/v1/login", credentials,
    {headers: new HttpHeaders({"X-XSRF-TOKEN": this.xsrfToken}), withCredentials: true});
  }

  getCsrf() {
    return this.http.get("http://localhost:8080/csrf/token", {withCredentials: true}
    ).subscribe((data: any) => this.xsrfToken = data.token);
  }

  private isLoggedIn():boolean {
    return localStorage.getItem('isLoggedIn') === 'true';

  }

  isAdmin():boolean {
    return 'ROLE_ADMIN' === localStorage.getItem('role');

  }

  isUser():boolean {
    return 'ROLE_USER' === localStorage.getItem('role');
  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('isLoggedIn');
    this.isLoggedInSignal.set(false);
    return this.http.post(
      'http://localhost:8080/api/v1/logout',
      {},
      {
        headers: new HttpHeaders({"X-XSRF-TOKEN": this.xsrfTokenExtractor.getToken() ?? '' }),
        withCredentials: true
      }
    )
  }
}
