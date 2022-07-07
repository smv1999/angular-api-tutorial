import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { POffice } from './postoffice';
@Injectable({
  providedIn: 'root'
})
export class PostofficeService {

  // API URI
  private _url: string = "https://api.postalpincode.in/pincode/"
  constructor(private http: HttpClient) { }

  getPostOfficeDetails(pincode: any): any {
    return this.http.get<POffice>(this._url + pincode);
  }

}
