import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '@app/_services';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private accountService: AccountService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue;

        if (user) {
            // be van jelentkezve
            return true;
        }

        // nincs bejelentkezve, ezért irányítsa át a home oldalra
        this.router.navigate(["/home"]);
        return false;
    }
}