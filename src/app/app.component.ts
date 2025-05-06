import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'messaging-app';

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    localStorage.clear();
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }
  // isAuthenticated(): boolean {
  //   return localStorage.getItem('auth') === 'true';
  // }
  
}
