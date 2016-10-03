import { Routes } from '@angular/router';


import { DashboardRoutes } from './dashboard/index';
import { LoginComponent } from './login/index';

export const routes: Routes = [
	
	...DashboardRoutes,
	{ path: '**', component: LoginComponent }
];
