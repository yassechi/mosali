import { Injectable, signal, WritableSignal } from '@angular/core';
import { EmployeeM } from '../Models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmplyeeService {
  employeesTab: WritableSignal<EmployeeM[]> = signal<EmployeeM[]>([
    {
      id: 1,
      name: 'Ahmed',
      email: 'ahmed@gmail.com',
      salary: 1000,
      phone: '112233',
      address: 'Tunis',
    }, {
      id: 2,
      name: 'Mohamed',
      email: 'mohamed@gmail.com',
      salary: 2000,
      phone: '223344',
      address: 'Sfax',
    }
  ]);

  isloged=signal(localStorage.getItem('isloged')?true:false);

  getEmployees(): EmployeeM[] {
    return this.employeesTab();
  }

  getEmployeeById(id: number): EmployeeM {
    return this.employeesTab().find((e) => e.id == id)!;
  }

  addEmployee(employee: EmployeeM) {
    this.employeesTab.set([...this.employeesTab(), employee]);
  }

  deleteEmployee(id: number) {
    console.log(id);
    this.employeesTab.set(this.employeesTab().filter((e) => e.id != id));
    console.log(this.employeesTab());
  }

  updateEmployee(employee: EmployeeM) {
    this.employeesTab.set(
      this.employeesTab().map((e) => (e.id == employee.id ? employee : e))
    );
  }
}
