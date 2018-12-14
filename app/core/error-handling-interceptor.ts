import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
    constructor(private messageService: MessageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do((event: HttpEvent<any>) => { }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                this.messageService.error(`Pojawił się błąd: ${err.message}`);
            }
            return Observable.throw(err);
        });
    }
}