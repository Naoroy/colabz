import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'api/employees';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`EmployeeService: ${message}`);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        tap(_ => this.log('fetched employees')),
        catchError(this.handleError<Employee[]>('getEmployees', []))
      );
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`

    return this.http.get<Employee>(url)
      .pipe(
        tap(_ => this.log(`fetched employees #${id}`)),
        catchError(this.handleError<Employee>(`getEmployees #${id}`))
      );
  }

  updateEmployee(employee: Employee) {
    return this.http.put(this.employeesUrl, employee, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated employee id ${employee.id}`)),
        catchError(this.handleError<any>('updateEmployee'))
      );
  }

  addEmployee(employee: Employee) {
    return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions)
      .pipe(
        tap((newEmployee: Employee) => this.log(`added employee with id=${newEmployee.id}`)),
        catchError(this.handleError<Employee>('addEmployee'))
      )
  }
  
  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted employee id=${id}`)),
        catchError(this.handleError<Employee>('deleteEmployee'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T)
    }
  }
}
