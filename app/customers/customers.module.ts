import { NgModule } from '@angular/core';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth-guard.service';
import { CustomerAddDeactivateGuard } from '../core/customer-add-deactivate-guard.service';

const ROUTES: Routes = [
  { path: 'customers', component: CustomerBrowserComponent },
  { path: 'customers/add', component: CustomerAddComponent, canActivate:[AuthGuard], canDeactivate:[CustomerAddDeactivateGuard]}
];

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    CustomerAddComponent, 
    CustomerBrowserComponent,
    CustomerDetailsComponent
  ],
  providers:[CustomerService],
  exports:[
    CustomerBrowserComponent
  ]
})
export class CustomersModule { }
