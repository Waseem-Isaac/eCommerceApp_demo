import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route } from '@app/core';
import { AuthGuard } from './shared/services/authentication/auth.guard';
import { AdminGuard } from './shared/services/authentication/admin.guard';

const routes: Routes = [
  Route.withShell([
    { path: 'cart', loadChildren: 'app/cart/cart.module#CartModule'},
    { path : 'auth' , loadChildren: 'app/auth/auth.module#AuthModule'},
    { path : 'dashboard' , loadChildren: 'app/dashboard/dashboard.module#DashboardModule', canActivate: [AdminGuard]},

  ]),
  // Fallback when no prior route is matched
 
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
