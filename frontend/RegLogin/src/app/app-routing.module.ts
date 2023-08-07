import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login_successComponent } from './login-success/login-success.component';

const routes: Routes = [
{path:'',component:Login_successComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
