import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Customer } from 'src/app/customers/model';
import { CONFIG, Config } from '../model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // private customers: Customer[] = [
  //   {
  //     name: "Jean Paul Kowalski",
  //     photoUrl: "assets/images/customer.png",
  //     description: "Pierdolony cfaniak",
  //     age: "27",
  //     address: {
  //       street: "Wschodnia",
  //       houseNumber: "29c",
  //       city: "Gnesen"
  //     },
  //     type: CustomerType.Premium,
  //     categories: ["Programisci", "Wdrożenia", "Helpdesk"]
  //   },
  //   {
  //     name: "Ajatollah Ahmadzenadani",
  //     photoUrl: "assets/images/customer.png",
  //     description: "Kochany przez lód książe Persji",
  //     age: "20",
  //     address: {
  //       street: "Masafi",
  //       houseNumber: "4",
  //       city: "Tehran"
  //     },
  //     type: CustomerType.Premium,
  //     categories: ["Imperial", "War", "Blade"]
  //   },
  //   {
  //     name: "Ezechiel Mosberg",
  //     photoUrl: "assets/images/customer.png",
  //     description: "Tajny wsółpracownik amerykańskiego Mosadu",
  //     age: "35",
  //     address: {
  //       street: "Benathani",
  //       houseNumber: "3c",
  //       city: "Jerusalem"
  //     },
  //     type: CustomerType.VIP,
  //     categories: ["Extermin", "Killing palestinian", "Missle"]
  //   }
  // ];

  constructor(@Inject(CONFIG) private config: Config, private httpClient: HttpClient) { }

  public getCustomers(){
    
    //return this.customers.slice(0, this.config.customerLimit);

    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`)
      .map(customers => customers.slice(0, this.config.customerLimit));
  }

  public createCustomer(customer: Customer)
  {
    return this.httpClient.post(`${this.config.apiUrl}/customers`, customer);
  }

  public deleteCustomer(customer: Customer)
  {
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${customer.id}`);
  }
}
