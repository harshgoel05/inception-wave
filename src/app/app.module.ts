import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { ServicesComponent } from './services/services.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import { CommunitiesComponent } from './communities/communities.component';
import { GalleryComponent } from './gallery/gallery.component';


import { KritarthComponent } from './kritarth/kritarth.component';
import { MeghaComponent } from './megha/megha.component';
import { KartikComponent } from './kartik/kartik.component';
import { GautamComponent } from './gautam/gautam.component';
import { GaganComponent } from './gagan/gagan.component';
import { DiviComponent } from './divi/divi.component';
import { GauravComponent } from './gaurav/gaurav.component';
import { ShivangComponent } from './shivang/shivang.component';
import { VishalComponent } from './vishal/vishal.component';
import { RakshitaComponent } from './rakshita/rakshita.component';
import { KritiComponent } from './kriti/kriti.component';
import { BlogsComponent } from './blogs/blogs.component';
import { Blog1Component } from './blogs/blog1/blog1.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    WhoareweComponent,
    CommunitiesComponent,
    GalleryComponent,
    KritarthComponent,
    MeghaComponent,
    KartikComponent,
    GautamComponent,
    GaganComponent,
    DiviComponent,
    GauravComponent,
    ShivangComponent,
    VishalComponent,
    RakshitaComponent,
    KritiComponent,
    BlogsComponent,
    Blog1Component
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
