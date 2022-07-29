import { Component, OnInit } from '@angular/core';
import { CustomerAPIService } from '../customer-api.service';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {

  constructor(private service:CustomerAPIService, private router:Router, private decimalPipe:DecimalPipe) { }

  data:any;
  repayment:number =0;
  totalRepayment:number =0;

  transformDecimal(num:number){
    return this.decimalPipe.transform(num, '1.2-2');
  }

  ngOnInit(): void {
    this.data = {
      id:0,
      amountRequired: 0,
      term: 0,
      title: "Default",
      firstName:"Default",
      lastName:"Default",
      dateOfBirth:"Default",
      mobile:"Default",
      email:"Default"
    };

    if(this.service.data != null){
      this.data = this.service.data;
      this.repayment = this.service.repayment;
      this.totalRepayment = this.service.totalrepayment;
    }

    var nameHeader = document.getElementById("NameHeader2");
    nameHeader!.innerHTML = this.data.firstName + " " + this.data.lastName;

    var mobileHeader = document.getElementById("MobileHeader2");
    mobileHeader!.innerHTML = this.data.mobile;

    var emailHeader = document.getElementById("EmailHeader2");
    emailHeader!.innerHTML = this.data.email;

    var loanHeader = document.getElementById("LoanHeader2");
    loanHeader!.innerHTML = "$" + this.transformDecimal(this.data.amountRequired);

    var termHeader = document.getElementById("TermHeader2");
    termHeader!.innerHTML = "over " + this.data.term + " months";

    var repaymentHeader = document.getElementById("RepaymentHeader2");
    repaymentHeader!.innerHTML = "$"+ this.transformDecimal(this.repayment)!;

    var totalRepaymentHeader = document.getElementById("TotalRepaymentHeader");
    totalRepaymentHeader!.innerHTML = "$"+ this.transformDecimal(this.totalRepayment)!;
  }

}
