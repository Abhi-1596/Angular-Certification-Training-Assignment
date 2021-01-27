import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewEmployee } from '../newemployee-list/employee2';

@Injectable()

export class EmployeeService {
    private url = "../../assets/data/empDetails.json";
    constructor(private http: HttpClient) {}

    getEmpData():Observable<NewEmployee[]> {
        return this.http.get<NewEmployee[]>(this.url);
    }
}