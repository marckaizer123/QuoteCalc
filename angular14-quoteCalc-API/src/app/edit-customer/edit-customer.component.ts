import { Component, OnInit } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { Router } from '@angular/router';
import { CustomerAPIService } from '../customer-api.service';



@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  constructor(private service:CustomerAPIService, private router:Router) { }

  data: any;

  ngOnInit(): void {
    this.data = {
      id:0,
      amountRequired: 0,
      term: 0,
      title: "",
      firstName:"",
      lastName:"",
      dateOfBirth:"1997-02-02T00:00:00",
      mobile:"",
      email:""
    };
    if(this.service.data != null){
      this.data = this.service.data;
    }
    
  }
  calculateQuote(){
    if(this.service.data!=null){
      this.service.data = this.data;
      this.service.editCustomer(this.service.data.id, this.service.data).subscribe(x=>{
        this.calculatePMT();
        this.router.navigate(['finalQuote'])
      });
    }
    else{
      console.log("Invalid Inputs");
    }
    
  }

  calculatePMT(){
    var interestRate = 0.0695/12; //interest rate found from MoneyMe website (6.95% interest rate)
    var loanAmount = this.service.data.amountRequired;
    var numRepayments = this.service.data.term;
    var establishmentFee = 300;
    var repayment = ((loanAmount*interestRate)*Math.pow((1 + interestRate), numRepayments))/(Math.pow((1 + interestRate), numRepayments)-1)
    var totalRepayment = numRepayments * ((((loanAmount*interestRate)*Math.pow((1 + interestRate), numRepayments))/(Math.pow((1 + interestRate), numRepayments)-1)) + (establishmentFee/numRepayments));
    this.service.repayment = repayment;
    this.service.totalrepayment = totalRepayment;
  }


}
