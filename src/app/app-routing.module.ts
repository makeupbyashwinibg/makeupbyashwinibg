import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryPageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }