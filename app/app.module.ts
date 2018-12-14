import { BrowserModule, } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { ContractsModule } from 'src/app/contracts/contracts.module';

const ROUTES: Routes = [
  // { path: 'contracts', loadChildren: '../app/contracts/contracts.module#ContractsModule'},
  { path: '', redirectTo: 'customers', pathMatch:'full'},
  { path: '**', redirectTo: 'customers'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    ContractsModule,
    CommonModule,
    ToastrModule.forRoot(),
    CustomersModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
