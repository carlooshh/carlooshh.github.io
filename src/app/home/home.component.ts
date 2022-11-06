import { Component, OnInit } from '@angular/core';
import { culturesMock, citiesMock, users } from 'src/app/shared/mock';
import { EmbrapaService } from 'src/app/services/embrapa.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  riskResult: EmbrapaResponse[] = [];

  constructor(
    private _fb: FormBuilder,
    private embrapaService: EmbrapaService,
    private router: Router
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

  scrollForm() {
    const element = document.getElementById('formSearch');
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  goWhatsapp() {
    window.open(
      'https://api.whatsapp.com/send?phone=5534988311253&text=Ol%C3%A1,%20tenho%20interesse%20em%20contratar%20um%20seguro',
      '_blank'
    );
  }
}

interface EmbrapaResponse {
  municipio: string;
  uf: string;
  cultura: string;
  ciclo: string;
  solo: string;
  diaIni: number;
  mesIni: number;
  diaFim: number;
  mesFim: number;
  safraIni: number;
  safraFim: number;
  risco: number;
}
