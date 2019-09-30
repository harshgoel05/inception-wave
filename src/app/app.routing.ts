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
import { GallerypageComponent } from './gallerypage/gallerypage.component';
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

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'gallery',          component: GallerypageComponent },
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
