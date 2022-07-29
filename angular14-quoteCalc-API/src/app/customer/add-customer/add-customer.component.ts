import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild, ɵɵsetComponentScope } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerAPIService } from 'src/app/customer-api.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private router:Router, private service:CustomerAPIService) { }

  input: string ="Test";
  customerList$!: Observable<any[]>;

  ngOnInit(): void {
    this.customerList$ = this.service.getCustomerList();
  }

  getId(){
    this.service.getCustomerList().subscribe( data =>{
      console.log(JSON.stringify(data[data.length-1]));
      this.service.data = data[data.length-1];
      this.parseDateInput();
      this.closeModal();
      this.router.navigate(["editCustomer"]);
    });
  }
  addCustomer(){
    var customer = JSON.parse(this.input)
    console.log(customer);
    this.service.addCustomer(customer).subscribe(x=>{
      this.getId();
    });
  }

  closeModal(){
    var closeModalBtn = document.getElementById('addCustomerModalClose');
    if(closeModalBtn){
      closeModalBtn.click();
    } 
  }

  parseDateInput(){
    let birthDate = new Date(Date.parse(this.service.data.dateOfBirth));
    this.service.data.dateOfBirth = birthDate.toISOString().substring(0,10);
  }

}
