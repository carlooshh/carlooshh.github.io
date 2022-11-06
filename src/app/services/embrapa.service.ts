import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.cnptia.embrapa.br/agritec/v1/culturas',
        options
      )
      .toPromise()
      .then((res) => {
        console.log('GET CULTURAS', res);
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  getRisks(cultureId: number, codIbge: number) {
    let params = new HttpParams();

    params = params.set('idCultura', cultureId);
    params = params.set('codigoIBGE', codIbge);

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        Authorization: 'Bearer ' + '998e36fd-b688-3565-be2b-2f669efc1d4c',
      },
      params: params,
    };

    return this.http
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.cnptia.embrapa.br/agritec/v1/zoneamento',
        options
      )
      .toPromise()
      .then((res) => {
        console.log('GET RISKS', res);
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
}
