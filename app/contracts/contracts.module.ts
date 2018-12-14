import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractService } from './contract.service';
import { RouterModule, Routes } from '@angular/router';
import { ContractDetailsComponent } from 'src/app/contracts/contract-details/contract-details.component';
import { ContractResolver } from './contract-resolver.service';

const ROUTES: Routes = [
  { path: 'contracts', component: ContractListComponent},
  { path: 'contracts/:id', component: ContractDetailsComponent, resolve:{
    contract: ContractResolver
  }}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ContractListComponent, ContractDetailsComponent],
  providers: [ContractService],
  exports:[ContractListComponent]
})
export class ContractsModule { }
