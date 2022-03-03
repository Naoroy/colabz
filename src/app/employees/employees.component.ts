import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [] 
  firstNameControl: FormControl = new FormControl('')
  lastNameControl: FormControl = new FormControl('')
  birthDateControl: FormControl = new FormControl('')
  phoneNumberControl: FormControl = new FormControl('')
  personalMailControl: FormControl = new FormControl('')
  professionalMailControl: FormControl = new FormControl('')


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

  add(): void {
    const firstname = this.firstNameControl.value.trim()
    const lastname = this.lastNameControl.value.trim()
    const birthDate = this.birthDateControl.value.trim()
    const phoneNumber = this.phoneNumberControl.value.trim()
    const personalMail = this.personalMailControl.value.trim()
    const professionalMail = this.professionalMailControl.value.trim()

    this.employeeService.addEmployee({
      firstname,
      lastname,
      birthDate,
      phoneNumber,
      personalMail,
      professionalMail
    } as Employee)
      .subscribe(employee => {
        console.log(employee)
        this.employees.push(employee);
      });

  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(e => e !== employee);
    this.employeeService.deleteEmployee(employee.id).subscribe();
  }
}
