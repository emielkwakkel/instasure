import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/shared/insurance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance } from '../../shared/insurances.interfaces'

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.css']
})
export class InsuranceDetailsComponent implements OnInit {
  private id: string;
  private insurance: Insurance;

  constructor(
    private insuranceService: InsuranceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id')
        this.insurance = this.insuranceService.getInsurance(this.id);
      }
    )
  }

  pay() {
    console.log('you\'ve payed');
  }
}
