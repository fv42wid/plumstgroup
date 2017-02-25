import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'services', component: ServicesComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);