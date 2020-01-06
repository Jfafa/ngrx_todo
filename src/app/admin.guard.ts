import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService
    ){}

  canActivate(): boolean{
    console.log('can activate ')
    if(this.auth.isUserAdmin()){
      return true;
    }    
    else{
      this.router.navigate(['/login'])
      return false;
    }
  }
}
