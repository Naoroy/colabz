import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        id: 1,
        firstname: 'Jane',
        lastname: 'Doe',
        isExecutive: false
      }, {
        id: 2,
        firstname: 'John',
        lastname: 'Doe',
        isExecutive: false
      }, {
        id: 3,
        firstname: 'Marcus',
        lastname: 'Bobas',
        isExecutive: false
      }, {
        id: 4,
        firstname: 'Carlos',
        lastname: 'Maneti', 
        isExecutive: false
      }, {
        id: 5,
        firstname: 'George',
        lastname: 'Domoas', 
        isExecutive: false
      }, {
        id: 6,
        firstname: 'Diane',
        lastname: 'Irresta', 
        isExecutive: false
      }, {
        id: 7,
        firstname: 'Melissa',
        lastname: 'Trevert', 
        isExecutive: false
      }, {
        id: 8,
        firstname: 'Kristen',
        lastname: 'Hierba', 
        isExecutive: false
      }, {
        id: 9,
        firstname: 'Gustave',
        lastname: 'Zamann', 
        isExecutive: false
      }, {
        id: 10,
        firstname: 'Cyril',
        lastname: 'Moretto', 
        isExecutive: false
      }, {
        id: 11,
        firstname: 'Brian',
        lastname: 'Tirano', 
        isExecutive: false
      }
    ];

    return { employees }
  }

  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }
}
