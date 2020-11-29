import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerViewComponent} from './customer-view/customer-view.component';
import {LoginComponent} from './login/login.component';
import {AdminViewComponent} from './admin-view/admin-view.component';

const routes: Routes = [

      {path: '', redirectTo: '/login', pathMatch: 'full' },
      {path: 'customer', component: CustomerViewComponent },
      {path: 'login', component: LoginComponent },
      {path: 'admin', component: AdminViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
