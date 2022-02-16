import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [] 
  selectedEmployee?: Employee

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = 
      this.selectedEmployee == employee
      ? undefined
      : employee
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
}
