import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';
import { User } from './appmodel/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }

  register(user: User) : Observable<any> {
    let url = "http://localhost:8181/UserRegister";
   return this.http.post(url, user); 
  }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8181/UserLogin";
   return this.http.post(url, login); 
  }
}
