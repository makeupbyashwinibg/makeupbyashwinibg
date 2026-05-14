import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    GalleryComponent,
    ReviewsComponent,
    FooterComponent,
    ContactSectionComponent,
    HomeComponent,
    GalleryPageComponent,
    ServicesPageComponent,
    ContactPageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
