import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmbrapaService {
  constructor(private http: HttpClient) {}

  getCulturas() {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        Authorization: 'Bearer ' + '094ca122-fc8c-3a25-8e72-5a49d4a12d7f',
      },
    };
    return this.http
      .get('https://api.cnptia.embrapa.br/agritec/v1/culturas', options)
      .toPromise()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
