import { Routes } from '@angular/router';
import { Home } from './UI/home/home';
import { Login } from './UI/login/login';

export const routes: Routes = [
    {path:'home',title:'Home', component: Home},
    {path:'login',title:'Home', component: Login},
];
