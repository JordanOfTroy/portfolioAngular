import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { ContactComponent } from '../components/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'about-me', pathMatch: 'full'},
  {path:'about-me', component: AboutMeComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'contact', component: ContactComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
