import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { NewEmployee } from '../newemployee-list/employee2';

@Injectable()

export class EmployeeService {
    private apiUrl: string = "http://dummy.restapiexample.com/api/v1/employees";

    // private url = "../../assets/data/empDetails.json"

    constructor(private http: HttpClient) {}

    getEmpData(): Observable<NewEmployee[]> {
        return this.http.get<NewEmployee[]>(this.apiUrl).pipe(catchError((error: HttpErrorResponse) => this.errorHandler));

        // return this.http.get<NewEmployee[]>(this.url);
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message);
    }
}