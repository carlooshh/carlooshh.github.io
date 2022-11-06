import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from '../shared/mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = Object.create(null);

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    const user = users.find((user) => user.email === email);
    if (user && user.password === password) {
      console.log('Login successful');
    } else {
      console.log('new user successful');
      const newUser = { email, password, role: 'user' };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
    }

    this.router.navigate(['page-layout']);
  }
}
