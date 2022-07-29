import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { FinalQuoteComponent } from './final-quote/final-quote.component';
import { SuccessPageComponent } from './success-page/success-page.component';

const routes: Routes = [
{path:'', component:CustomerComponent},
{path:'editCustomer', component:EditCustomerComponent},
{path: 'finalQuote', component:FinalQuoteComponent},
{path: 'successPage', component:SuccessPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
