import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterBookComponent } from './pages/register-book/register-book.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'register', component: RegisterBookComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
