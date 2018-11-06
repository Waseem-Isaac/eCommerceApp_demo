import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    }

    console.log('No Permission, redirecting...');
    this.router.navigate(['/'], { replaceUrl: true });
    return false;
  }

}
