import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [] 

  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  add(
    firstname: string,
    lastname: string
  ): void {
    firstname = firstname.trim();
    lastname = lastname.trim();

    if (!firstname) { return; }
    this.employeeService.addEmployee({ firstname, lastname } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(e => e !== employee);
    this.employeeService.deleteEmployee(employee.id).subscribe();
  }
}
