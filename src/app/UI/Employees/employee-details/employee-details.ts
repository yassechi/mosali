import { Component, inject, signal } from '@angular/core';
import { EmployeeM } from '../../../Models/Employee';
import { EmplyeeService } from '../../../Services/emplyee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styles: ``,
})
export default class EmployeeDetails {
  srv = inject(EmplyeeService);
  router = inject(Router);

  employee = <EmployeeM | undefined>undefined;
  modifierEmployee = (id: number) => {
    this.router.navigate(['/employee-update']);
  };

  retour = () => {
    this.router.navigate(['/employees']);
  };
}
