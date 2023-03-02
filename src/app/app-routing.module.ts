import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/_helpers';
import { DashboardComponent } from '@app/user/dashboard.component';
import { HomeComponent } from '@app/_components';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const userModule = () => import('./user/user.module').then(x => x.UserModule);
const catchesModule = () => import('./catches/catches.module').then(x => x.CatchesModule);

const routes: Routes = [
  { path: 'user/dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'account', loadChildren: accountModule },
  { path: 'user', loadChildren: userModule, canActivate: [AuthGuard] },
  { path: 'catches', loadChildren: catchesModule, canActivate: [AuthGuard] },

  // Egyébként a dashboard oldalra irányítson
  { path: '**', redirectTo: 'user/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }