import { Component, OnInit } from '@angular/core';
import { CustomerType } from 'src/app/customers/model';
import { CustomerService } from 'src/app/customers/customer.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'cus-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  name:string;
  age:string;
  type:CustomerType;

  CustomerType = CustomerType;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  add(form: NgForm){
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      photoUrl: "",
      address: {
        city:"",
        houseNumber: "",
        street: ""
      },
      categories: [],
      description: ""
    }).subscribe(
      ()=>{
        form.resetForm();
      }
  );
  }

}
