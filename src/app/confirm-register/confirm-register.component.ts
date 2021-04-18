import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'confirm-register',
  templateUrl: './confirm-register.component.html',
  styleUrls: ['./confirm-register.component.css']
})
export class ConfirmRegisterComponent implements OnInit {

  userId: number;

  constructor() { }

  ngOnInit(): void {
    this.userId = parseInt(sessionStorage.getItem('userId'));
  }

}
