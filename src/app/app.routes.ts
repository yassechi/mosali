import { Routes } from '@angular/router';


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
  },
  {
    path: 'add-employee',
    title: 'add-employee',
    loadComponent: () =>
      import('./UI/Employees/add-employee/add-employee'),
  },
];
