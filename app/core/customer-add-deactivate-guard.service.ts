import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CustomerAddComponent } from '../customers/customer-add/customer-add.component';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddDeactivateGuard implements CanDeactivate<CustomerAddComponent> {

  constructor() { }

  canDeactivate(component: CustomerAddComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean 
  {
    return !(component.name || component.age || component.type);
  }
}
