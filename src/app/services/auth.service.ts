import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly validCredentials = { username: 'santosh', password: '12345' };

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === this.validCredentials.username && password === this.validCredentials.password) {
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  logout(): void {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  checkAuth(): boolean {
    return this.isAuthenticated();
  }
}
