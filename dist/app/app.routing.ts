import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { GalleryComponent } from './gallery/gallery.component';
import { KritarthComponent } from './kritarth/kritarth.component';
import { KartikComponent } from './kartik/kartik.component';
import { GauravComponent } from './gaurav/gaurav.component';
import { MeghaComponent } from './megha/megha.component';
import { DiviComponent } from './divi/divi.component';
import { GaganComponent } from './gagan/gagan.component';
import { GautamComponent } from './gautam/gautam.component';
import { ShivangComponent } from './shivang/shivang.component';
import { VishalComponent } from './vishal/vishal.component';
import { RakshitaComponent } from './rakshita/rakshita.component';
import { KritiComponent } from './kriti/kriti.component';

import {Blog1Component} from './blogs/blog1/blog1.component'
const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'yash',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'gallery',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'kritarth',      component: KritarthComponent },
    { path: 'kartik',      component: KartikComponent },
    { path: 'gaurav',      component: GauravComponent },
    { path: 'megha',      component: MeghaComponent },
    { path: 'arshia',      component: DiviComponent },
    { path: 'gagan',      component: GaganComponent },
    { path: 'pratik',      component: GautamComponent },
    { path: 'shivang',      component: ShivangComponent },
    { path: 'vishal',      component: VishalComponent },
    { path: 'rakshita',      component: RakshitaComponent },
    { path: 'kriti',      component: KritiComponent },
    { path: 'blog1',      component: Blog1Component },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
