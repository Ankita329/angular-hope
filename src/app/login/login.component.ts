import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { UserService } from '../user.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();
  message: string;

  constructor(private userService: UserService, private router: Router) { }

  loginCheck() {
    console.log(this.login); {
      this.userService.login(this.login).subscribe(response => {
        //alert(JSON.stringify(response));
        console.log(response);
      if(response.status == true) {
        let userId = response.userId;
        let userName = response.name;
        sessionStorage.setItem('userId', String(userId));
        sessionStorage.setItem('userName', userName);
        this.router.navigate(['dashboard']);
        this.message = response.message;
      }
      else
        this.message = response.message;
       
      })
    }
  }

}
