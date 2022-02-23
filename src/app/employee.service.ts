import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor( private messageService: MessageService) { }

  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    this.messageService.add('EmployeeService: fetched employees');
    return employees;
  }

  getEmployee(id: number): Observable<Employee> {
    const employee = EMPLOYEES.find(e => e.id === id)!;
    this.messageService.add(`EmployeeService: fetched employee id=${id}`);
    return of(employee);
  }
}
