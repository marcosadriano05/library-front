import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterBookComponent } from './pages/register-book/register-book.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookInfoComponent } from './pages/book-info/book-info.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterBookComponent,
    DashboardComponent,
    NavBarComponent,
    BookCardComponent,
    BookInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
