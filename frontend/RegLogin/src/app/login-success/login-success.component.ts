import { Component } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class Login_successComponent {
  users!: User[];

  constructor(private registrationService: RegistrationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(){
    this.registrationService.getUserList().subscribe(data => {
      this.users = data;
    });
  }
}
