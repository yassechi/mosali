import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Authentification } from './Services/authentification';


export const routes: Routes = [
  {
    path: 'home',
    title: 'about',
    loadComponent: () => import('./UI/home/home'),
  },
  {
    path: 'login',
    title: 'login-sing',
    loadComponent: () => import('./UI/login/login'),
  },
  {
    path: 'employees',
    title: 'mosali-emploees',
    loadComponent: () =>
      import('./UI/Employees/employees/employees'),
    canActivate: [()=>inject(Authentification).isLoggedIn()],
  },
  {
    path: 'add-employee',
    title: 'add-employee',
    loadComponent: () =>
      import('./UI/Employees/add-employee/add-employee'),
    canActivate: [()=>inject(Authentification).isLoggedIn()],
  },
   {
    path: 'employee-update',
    title: 'employee-update',
    loadComponent: () =>
      import('./UI/Employees/employee-update/employee-update'),
    canActivate: [()=>inject(Authentification).isLoggedIn()],
  },
   {
    path: 'employee-details/:id',
    title: 'employee-details',
    loadComponent: () =>
      import('./UI/Employees/employee-details/employee-details'),
    canActivate: [()=>inject(Authentification).isLoggedIn()],
  },
  {
    path: '404',
    title: 'page-not-found',
    loadComponent: () =>
      import('./UI/page-not-found/page-not-found'),
  },
    {
    path: '',
    pathMatch:'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    redirectTo: '404',
  }
];
