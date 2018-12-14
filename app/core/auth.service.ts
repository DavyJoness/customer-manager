import { Injectable } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;

  constructor() { }

  login(){
    this.isLogged = true;
  }

  logout(){
    this.isLogged = false;
  }
}
