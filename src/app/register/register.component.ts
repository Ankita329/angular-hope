import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../appmodel/user';
import { UserService } from '../user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  register() {
    alert(JSON.stringify(this.user));
    this.userService.register(this.user).subscribe(response => {
      alert(JSON.stringify(response));
      if(response.status == true) {
        sessionStorage.setItem('userId', response.registeredUserId);
        this.router.navigate(['confirm-register']);
      }
    })
  }
 

}
