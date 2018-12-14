import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contract } from 'src/app/contracts/model';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {
  contract: Contract;

  constructor(private activatedRoute: ActivatedRoute, private contractService: ContractService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.contract = data.contract;
    });

    // this.activatedRoute.params.subscribe(params => {
    //   const ID:number = parseInt(params['id']);
      
    //   this.contractService.getContract(ID).subscribe(c=>{
    //     this.contract = c;
    //   });
    // });
  }

}
