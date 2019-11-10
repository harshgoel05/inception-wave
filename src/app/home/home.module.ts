import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import { MentorsComponent } from './mentors/mentors.component';
import { Mentor1Component } from './mentors/mentor1/mentor1.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChennaiComponent } from './chapters/chennai/chennai.component';
import { MsitComponent } from './chapters/msit/msit.component';
import { DrcComponent } from './chapters/drc/drc.component';
// import { GalleryComponent } from 'app/gallery/gallery.component';
@NgModule({
    declarations: [
        HomeComponent,
        MentorsComponent,
        Mentor1Component,
        ChaptersComponent,
        ChennaiComponent,
        MsitComponent,
        DrcComponent,
        // GalleryComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        NgbModule
    ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
