import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerAPIService {

  constructor(private http:HttpClient) { }

  readonly customerAPI = 'https://localhost:7102/api';

  data:any;
  repayment:number=0;
  totalrepayment:number=0;

  getCustomerList():Observable<any[]>{
    return this.http.get<any>(this.customerAPI + '/Customers');
  }

  addCustomer(data:any){
    return this.http.post(this.customerAPI + '/Customers', data);
  }

  editCustomer(id:number|string, data:any){
    return this.http.put(this.customerAPI+`/Customers/${id}`, data);
  }
  

  deleteCustomer(id:number|string){
    return this.http.delete(this.customerAPI + `/Customers/${id}`);
  }
}
