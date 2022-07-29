import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerAPIService } from 'src/app/customer-api.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  customerList$!:Observable<any[]>;
  customer:any;
  activatedAddCustomer:boolean = false;

  constructor(private service:CustomerAPIService) { }

  ngOnInit(): void {
    this.customerList$ = this.service.getCustomerList();
  }

  modalAdd(){
    this.activatedAddCustomer = true;
  }
  modalClose() {
    this.activatedAddCustomer = false;
    this.customerList$ = this.service.getCustomerList();
  }
}
