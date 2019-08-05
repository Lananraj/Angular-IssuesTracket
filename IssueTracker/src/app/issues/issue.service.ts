import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IIssues } from './issues';


@Injectable({
    providedIn : 'root'
})
export class IssueService{
    private issuesUrl = 'api/issues-data/issues.json'; 
   

    constructor(private http:HttpClient) {}   

    getIssues(): Observable<IIssues[]>
    {
        console.log("File path "+this.issuesUrl);
        return this.http.get<IIssues[]>(this.issuesUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
        );
        
    }
    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
    }


