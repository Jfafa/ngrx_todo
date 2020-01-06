import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService
    ){}
    
  canActivate(): boolean{
    console.log('can activate ')
    if(this.auth.isUserLoggedIn()){
      console.log('true' + this.auth.isUserLoggedIn())
      return true;
    }    
    else{
      this.router.navigate(['/login'])
      console.log('false' + this.auth.isUserLoggedIn())
      return false;
    }
  }
}
