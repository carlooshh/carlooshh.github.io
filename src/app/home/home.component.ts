import { Component, OnInit } from '@angular/core';
import { users, cultures, cities } from '../shared/mock';
//teste
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  goToLogin() {}
}
