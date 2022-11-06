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
        Authorization: 'Bearer ' + '998e36fd-b688-3565-be2b-2f669efc1d4c',
      },
    };
    return this.http
      .get('echo/culturas', options)
      .toPromise()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
