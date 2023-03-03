import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from '@app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(err => {
            if ([401].includes(err.status) && this.accountService.userValue) {
                // Automatikus kijelentkeztetés 401-es státusz esetén
                this.accountService.logout();
            } else if ([403].includes(err.status) && this.accountService.userValue) {
                // Automatikus átirányítás, ha a felhasználó nem a saját adatait akarja szerkeszteni
                this.accountService.forbidden();
            }

            const error = err.error.message || err.statusText;
            console.error(err);
            return throwError(() => error);
        }));
    }
}