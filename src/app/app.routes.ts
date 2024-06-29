import { Routes } from '@angular/router';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { ToursComponent } from './tours/tours.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path:'register', component:RegisterUsersComponent},
    {path:'login', component:LoginComponent},
    {path:'', component:HomeComponent},
    {path:'tours/:id', component:ToursComponent}
];
