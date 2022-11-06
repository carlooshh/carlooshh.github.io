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
  isLoading = false;
  riskResult = null;

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

  async search() {
    this.isLoading = true;
    this.riskResult = await this.embrapaService.getRisks(
      this.searchForm.controls['culture'].value,
      this.searchForm.controls['city'].value
    );

    console.log(this.riskResult);
    this.isLoading = false;
  }
  ngOnInit(): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  goToLogin() {}
}
