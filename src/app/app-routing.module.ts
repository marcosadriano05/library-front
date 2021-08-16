import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterBookComponent } from './pages/register-book/register-book.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookInfoComponent } from './pages/book-info/book-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'register', component: RegisterBookComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book/:id', component: BookInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
