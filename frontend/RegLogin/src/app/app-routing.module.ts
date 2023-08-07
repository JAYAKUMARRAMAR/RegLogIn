import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login_successComponent } from './login-success/login-success.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
//{path:'',component:LoginComponent},
{path:'login-success',component:Login_successComponent},
{path:'registration',component:RegistrationComponent},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
