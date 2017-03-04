import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'services/:id', component: ServicesComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);