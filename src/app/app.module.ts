import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/navbar/header/header.component';
import { ToolbarComponent } from './components/navbar/toolbar/toolbar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AdvisorComponent } from './components/advisor/advisor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    HeaderComponent,
    ToolbarComponent,
    OverviewComponent,
    AdvisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
