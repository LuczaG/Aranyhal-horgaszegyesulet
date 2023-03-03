import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize } from 'rxjs/operators';

// tömb a localStorage-ban a regisztrált felhasználók számára
const userKey = 'users';
let users: any[] = JSON.parse(localStorage.getItem(userKey)) || [];

// tömb a localStorage-ban a fogások számára
const catchesKey = 'catches';
let catches: any[] = JSON.parse(localStorage.getItem(catchesKey)) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRout();

        function handleRout() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.match(/\/user\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/user\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.endsWith('/catches/add') && method === 'POST':
                    return addCatch();
                case url.endsWith('/catches') && method === 'GET':
                    return getCatches();
                case url.match(/\/catches\/\d+$/) && method === 'GET':
                    return getCatchById();
                case url.match(/\/catches\/\d+$/) && method === 'PUT':
                    return updateCatch();
                case url.match(/\/catches\/\d+$/) && method === 'DELETE':
                    return deleteCatch();
                default:
                    // a fent nem kezelt kérések továbbítása.
                    return next.handle(request);
            }
        }

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('A felhasználónév vagy a jelszó nem megfelelő!');
            return ok({
                ...basicDetails(user),
                token: 'fake-jwt-token'
            });
        }

        function register() {
            const user = body;

            if (users.find(x => x.username === user.username)) {
                return error('A "' + user.username + '" felhasználónév már foglalt, kérjük válassz másikat!');
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem(userKey, JSON.stringify(users));
            return ok();
        }

        function getUserById() {
            if (!isLoggedIn()) return unauthorized();

            const loggedInUser = JSON.parse(localStorage.getItem('user'));
            const user = users.find(x => x.id === idFromUrl());

            if (user?.id) {
                if (loggedInUser.id !== user.id) {
                    return forbidden();
                } else {
                    return ok(basicDetails(user));
                }
            } else {
                return forbidden();
            }
        }

        function updateUser() {
            if (!isLoggedIn()) return unauthorized();

            let params = body;
            let user = users.find(x => x.id === idFromUrl());

            // Csak akkor módosítjuk a jelszót, ha van benne érték.
            if (!params.password) {
                delete params.password;
            }

            Object.assign(user, params);
            localStorage.setItem(userKey, JSON.stringify(users));

            return ok();
        }

        function addCatch() {
            if (!isLoggedIn()) return unauthorized();

            const fogas = body;
            const loggedInUser = JSON.parse(localStorage.getItem('user'));

            fogas.id = catches.length ? Math.max(...catches.map(x => x.id)) + 1 : 1;
            fogas.userId = loggedInUser.id;

            catches.push(fogas);
            localStorage.setItem(catchesKey, JSON.stringify(catches));
            return ok();
        }

        function getCatches() {
            if (!isLoggedIn()) return unauthorized();

            const loggedInUser = JSON.parse(localStorage.getItem('user'));
            catches.map(x => basicCatchDetails(x))

            return ok(catches.filter(x => x.userId === loggedInUser.id));
        }

        function getCatchById() {
            if (!isLoggedIn()) return unauthorized();

            const fogas = catches.find(x => x.id === idFromUrl());
            return ok(basicCatchDetails(fogas));
        }

        function updateCatch() {
            if (!isLoggedIn()) return unauthorized();

            let params = body;
            let fogas = catches.find(x => x.id === idFromUrl());

            Object.assign(fogas, params);
            localStorage.setItem(catchesKey, JSON.stringify(catches));

            return ok();
        }

        function deleteCatch() {
            if (!isLoggedIn()) return unauthorized();

            catches = catches.filter(x => x.id !== idFromUrl());
            localStorage.setItem(catchesKey, JSON.stringify(catches));

            return ok();
        }

        function error(message: string) {
            return throwError(() => ({ error: { message } })).pipe(
                materialize(), delay(500), dematerialize()
                // Hívjuk meg a materialize() és dematerialize() függvényeket.
                // hogy hiba esetén is biztosítsk a késleltetést.
            );
        }

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body })).pipe(
                delay(500)
                // kéleletejük az Observable-t a szerver API hívás
                // szimulálásához.
            );
        }

        function basicDetails(user: any) {
            const { id, username, firstName, lastName } = user;
            return { id, username, firstName, lastName };
        }

        function basicCatchDetails(fogas: any) {
            const { id, userId, ev, ponty, sullo, harcsa } = fogas;
            return { id, userId, ev, ponty, sullo, harcsa };
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function unauthorized() {
            return throwError(() => ({ status: 401, error: { message: 'Unauthorized' } }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function forbidden() {
            return throwError(() => ({ status: 403, error: { message: 'Forbidden' } }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function idFromUrl() {
            const urlParts = url.split('/'); // Ez lesz belőle -> ["users / catches", "edit", "1"]
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // Hamis backend-et használunk
    // backend less developement
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
}