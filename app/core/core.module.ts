import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptor } from 'src/app/core/error-handling-interceptor';
import { MessageService } from 'src/app/core/message.service';
import { Config, CONFIG } from '../model';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';


export const config: Config = {
  customerLimit: 20,
  apiUrl:"http://localhost:13378"
}

@NgModule({
  providers: [ 
    AuthGuard,
 
    AuthService,
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true},
    {provide: CONFIG, useValue: config},    
    ],
  declarations: [NavbarComponent],
  exports:[
    NavbarComponent
  ],
  imports:[
    RouterModule,
    CommonModule
  ]

})
export class CoreModule { }
