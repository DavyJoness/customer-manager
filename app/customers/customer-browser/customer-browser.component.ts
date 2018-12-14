import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerType } from 'src/app/customers/model';
import { CustomerDetailsComponent } from 'src/app/customers/customer-details/customer-details.component';
import { CustomerService } from 'src/app/customers/customer.service';
import { MessageService } from '../../core/message.service';



@Component({
  selector: 'cus-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {

  customer: Customer;
  customers$: Observable<Customer[]>;
  nameColor: string = "blue";

  CustomerType = CustomerType;

  @ViewChild("childerson") detailsCmp: CustomerDetailsComponent;

  constructor(private service: CustomerService, private messageService: MessageService) { }

  ngOnInit() {
    this.refresh();

  }

  showPrompt() {
    this.detailsCmp.showPrompt();
  }

  onEmit(i: number) {
    //this.customer = this.customers[i];
    //this.messageService.success("Zmieniono osobnika!");
  }

  deleteCustomer() {
    this.service.deleteCustomer(this.customer).subscribe(() => this.refresh(),
  ()=> this.messageService.error("Cos sie sypło!"));

  }

  private refresh() {
    this.customer = null;
    this.customers$ = this.service.getCustomers();
    // this.service.getCustomers().subscribe(response => {
    //   this.customers = response;
    //   this.customer = this.customers[0];
    // });
  }
}
