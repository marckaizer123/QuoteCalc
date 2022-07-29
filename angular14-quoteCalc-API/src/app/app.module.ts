import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

import { CustomerAPIService } from './customer-api.service';
import { MatSliderModule } from '@angular/material/slider';
import { FinalQuoteComponent } from './final-quote/final-quote.component';
import { DecimalPipe } from '@angular/common';
import { SuccessPageComponent } from './success-page/success-page.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ShowCustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    FinalQuoteComponent,
    SuccessPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule
  ],
  providers: [CustomerAPIService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
