import { Router } from '@angular/router';
import { CartService } from './../../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

import { I18nService } from '../../i18n.service';
import { AuthService } from '@app/shared/services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuHidden = true;

  constructor(private i18nService: I18nService, 
    public cartService:CartService, 
    public authService: AuthService,
    private router :Router
    ) { }

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  logOut(){
    this.authService.logout().subscribe(() => 
    {
      console.log("Logged Out");
      this.router.navigate(['/auth/login'], { replaceUrl: true });
    }
    , err => console.log("Faild To Log out"))
  }
  //
  get user(): any {
    const credentials = this.authService.credentials;
    return credentials ? credentials.user : null;
  }


}
