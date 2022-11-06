import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleInterface } from 'src/app/interfaces/vehicle/vehicle-interface';
import JwtAuth from '../auth/jwt-auth/jwt-auth';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) {

  }

  async postRequest(url: any, body: any) {
    return new Promise((resolve, reject) => {
      this.http.post(url, body).subscribe(res => {
        resolve(res);
      }, err => {
        resolve(err)
      })
    })
  }

  async putRequest(url: any, body: any) {
    return new Promise((resolve, reject) => {
      this.http.put(url, body).subscribe(res => {
        resolve(res);
      }, err => {
        resolve(err)
      })
    })
  }

  public async getRequest(url: any) {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, err => {
        resolve(err)
      })
    })
  }

  public async deleteRequest(url: any, body: any) {
    // console.log(body);
    // console.log(url);
    return new Promise((resolve, reject) => {
      this.http.request('delete', url, { body: body }).subscribe(res => {
        // console.log(res);
        resolve(res);
      }, err => {
        resolve(err)
      })
    })
  }

  async get(url: any) {
    var response;
    await this.getRequest(url).then(res => {
      response = res;
    });
    return response;
  }

  async deactivateObject(url: any, objectToDeactivate: VehicleInterface) {
    return new Promise(async (resolve, reject) => {
      let loggedUser = JwtAuth.getLoggedUser();
      let body: any = {
        "licenseplate": objectToDeactivate.licenseplate,
        "deletedBy_id": loggedUser?.id ?? -1
      };
      await this.deleteRequest(url, body).then(res => {
        resolve(res);
      });
    });
  }

  async insertObject(url: any, objectToInsert: VehicleInterface) {
    return new Promise(async (resolve, reject) => {
      await this.postRequest(url, objectToInsert).then(res => {
        resolve(res);
      });
    });
  }

  async updateObject(url: any, objectToUpdate: VehicleInterface) {
    return new Promise(async (resolve, reject) => {
      await this.putRequest(url, objectToUpdate).then(res => {
        resolve(res);
      });
    });
  }



}
