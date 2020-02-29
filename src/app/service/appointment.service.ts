import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  JSON_SERVER_URL = 'http://localhost:3000/customers';
  constructor(public http: HttpClient) { }

  public save(customer: Customer) {
   return  this.http.post(this.JSON_SERVER_URL, customer);
  }
  public getOneCustomer(id: number) {
    return  this.http.get(this.JSON_SERVER_URL + '/' + id);
  }
  public getAllCustomers() {
    return this.http.get(this.JSON_SERVER_URL);
  }
}
