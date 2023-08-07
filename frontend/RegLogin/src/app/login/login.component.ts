import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  user = new User();
  msg='';

   constructor(private _service:RegistrationService, 
               private   _router:Router){}
    
   ngOnInit(): void {    }  
  
   loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received")
        this._router.navigate(['/login-success'])
      },
      error=>{console.log("exception occured");
    this.msg="Bad Credentials, Please enter valid email id and password";
    }   
    );
   }

   gotoregistration(){
    this._router.navigate(['/registration'])
   }

}
