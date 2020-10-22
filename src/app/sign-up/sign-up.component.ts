import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  user: { fName: string; lName: string; email: string; password: string } = {
    fName: '',
    lName: '',
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  createUser() {
    console.log('User Creates: ', this.user);
    this.user = { fName: '', lName: '', email: '', password: '' };
  }
}
