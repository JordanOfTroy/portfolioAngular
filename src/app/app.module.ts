import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ExperienceComponent } from './components/experience/experience.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from 'environment';

// Solution 3 got this project back on it's feet, in regard to Firestore
//https://stackoverflow.com/questions/73281199/error-when-importing-angularfiredatabasemodule

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutMeComponent,
    ContactComponent,
    ExperienceComponent,
    TopNavComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
