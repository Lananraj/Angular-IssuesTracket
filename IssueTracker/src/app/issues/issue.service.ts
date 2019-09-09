import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IIssues } from './issues';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn : 'root'
})
export class IssueService{
    private issuesUrl = ' http://localhost:4200/api/issues-data/issues.json'; 
   
    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
  };

    constructor(private http:HttpClient) {}   

    getIssues(): Observable<IIssues[]>
    {
        console.log("File path "+this.issuesUrl);
        return this.http.get<IIssues[]>(this.issuesUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
        );
        
    }

    addIssue():Observable<IIssues>{
      console.log('Inside addIssue');
      var findU = JSON.stringify( {
        "issueId" : "INC000112",
        "description" : "Forgot password error message",
        "severity" : "01Minor",
        "status" : "01",
        "creationDate" : "2019-08-11",
        "resolvedDate" : "2019-09-11"
        })


      return this.http.post<IIssues>(this.issuesUrl,findU,this.httpOptions);
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


