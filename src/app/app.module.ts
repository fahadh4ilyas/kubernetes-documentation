import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { PendahuluanComponent } from './components/pendahuluan/pendahuluan.component';
import { ApaItuKubernetesComponent } from './components/apa-itu-kubernetes/apa-itu-kubernetes.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BottomLinkComponent } from './components/bottom-link/bottom-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PendahuluanComponent,
    ApaItuKubernetesComponent,
    PagenotfoundComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    FooterComponent,
    BottomLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
