import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'services', component: ServicesComponent },
    { path: 'home', component: HomeComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);