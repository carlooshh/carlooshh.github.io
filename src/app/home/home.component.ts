import { Component, OnInit } from '@angular/core';
import { culturesMock, citiesMock, users } from 'src/app/shared/mock';
import { EmbrapaService } from 'src/app/services/embrapa.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  cultures = culturesMock;
  city = citiesMock;
  auxiliar = {};
  constructor(
    private _fb: FormBuilder,
    private embrapaService: EmbrapaService
  ) {
    this.searchForm = this._fb.group({
      culture: 0,
      name: '',
      phoneNumber: '',
      email: '',
      city: '',
    });
  }

  search() {
    let resp = this.embrapaService.getRisks(
      this.searchForm.controls['culture'].value,
      this.searchForm.controls['city'].value
    );
    console.log('sem data: ' + resp);
    console.log('com data: ' + Object.values(resp));
  }
  ngOnInit(): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  goToLogin() {}
}
