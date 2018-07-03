import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { ModularToolsUsedComponent } from './modular-tools-used/modular-tools-used.component';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'About-Me', component: AboutMeComponent },
  { path: 'Contact-Me', component: ContactMeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Modular-Tools-Used', component: ModularToolsUsedComponent },
  { path: 'Showcase', component: ShowcaseComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
