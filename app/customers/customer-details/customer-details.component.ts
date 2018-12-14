import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Customer, CustomerType } from 'src/app/customers/model';
import { MessageService } from 'src/app/core/message.service';


@Component({
  selector: 'cus-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  i: number = 0;
  @Input() customer: Customer = null;
  @Output() index: EventEmitter<number> = new EventEmitter<number>();
  showPhoto: boolean = false;
  isActive: boolean = true;


  CustomerType = CustomerType;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  public changeCustomer()
  {
    if(this.i<2)
      this.i++;
    else
      this.i=0;

    this.index.emit(this.i);
    
  }

  public changeIsActive()
  {
      this.isActive = !this.isActive;
  }

  public showPrompt()
  {
    console.log("Abdullah");
    this.messageService.success("Koza");
  }
}
