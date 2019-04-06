import { Injectable } from '@angular/core';
import { INSURANCES } from './mock-data';
import { Insurance } from './insurances.interfaces';


@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  private _insurances: Insurance[] = INSURANCES;

  constructor() { }

  get insurances() {
    return this._insurances;
  }

  getInsurance(id: string) {
    return this._insurances.find(
      (insurance) => insurance.id === id
    )}
}
