import { Component, inject, input, signal, WritableSignal } from '@angular/core';
import { EmployeeM } from '../../../Models/Employee';
import { EmplyeeService } from '../../../Services/emplyee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.html',
})
export default class Employees {

  srv = inject(EmplyeeService)
  router = inject(Router)

  employeesTab  = this.srv.getEmployees();

  deleteEmployee = (emp : EmployeeM) => {
    this.srv.deleteEmployee(emp.id);
  }

  editEmployee = (emp : EmployeeM) => {

      // this.router.navigate(['add-employee', emp.id])
      this.router.navigate(['add-employee'])
  }



}
