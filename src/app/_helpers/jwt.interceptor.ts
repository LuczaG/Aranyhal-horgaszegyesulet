import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '@app/_services';
import { environment } from '@environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // a felhasználóhoz hitelesítési fejlécet adunk a JwT-vel
        // feltételek: bejelentkezés, a kérésnek az ApiUrl-re kell hivatkoznia
        const user = this.accountService.userValue;
        const isLoggedIn = user && user.token;
        const isApiUrl = req.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }

        return next.handle(req);
    }
}