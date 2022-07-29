import { Component, OnInit } from '@angular/core';
import { CustomerAPIService } from '../customer-api.service';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-quote',
  templateUrl: './final-quote.component.html',
  styleUrls: ['./final-quote.component.css']
})
export class FinalQuoteComponent implements OnInit {

  constructor(private service:CustomerAPIService, private router:Router, private decimalPipe:DecimalPipe) { }

  data:any;
  repayment:number =0;
  legalAge:boolean = false;

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
    }

    var nameHeader = document.getElementById("NameHeader");
    nameHeader!.innerHTML = this.data.firstName + " " + this.data.lastName;

    var mobileHeader = document.getElementById("MobileHeader");
    mobileHeader!.innerHTML = this.data.mobile;

    var emailHeader = document.getElementById("EmailHeader");
    emailHeader!.innerHTML = this.data.email;

    var loanHeader = document.getElementById("LoanHeader");
    loanHeader!.innerHTML = "$" + this.data.amountRequired;

    var termHeader = document.getElementById("TermHeader");
    termHeader!.innerHTML = "over " + this.data.term + " months";

    var repaymentHeader = document.getElementById("RepaymentHeader");
    repaymentHeader!.innerHTML = "$"+ this.transformDecimal(this.service.repayment)!;
  }

  verifyAge(){
    let birthDate = new Date(this.service.data.dateOfBirth);
    let currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var m = currentDate.getMonth() - birthDate.getMonth();
    if(m<0 || (m===0 && currentDate.getDate() < birthDate.getDate())){
      age--;
    }

    console.log("Age: " + age);
    if(age>18){
      this.legalAge = true;
    }
  }
  applyNow(){
    this.verifyAge();
    if(this.legalAge){
      this.router.navigate(['successPage']);
    }
    
  }

}
