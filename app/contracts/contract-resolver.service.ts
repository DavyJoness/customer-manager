import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Contract } from 'src/app/contracts/model';
import { ContractService } from './contract.service';

@Injectable({
  providedIn: 'root'
})
export class ContractResolver implements Resolve<Contract> {

  constructor(private contractService: ContractService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Contract> | Promise<Contract> | Contract {
    const ID = parseInt(route.params['id']);
    return this.contractService.getContract(ID);
  }
}
