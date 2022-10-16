import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { CardsComponent } from './components/cards/cards.component';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
