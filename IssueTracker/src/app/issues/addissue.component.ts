import { Component } from '@angular/core';
import { IssuesComponent } from './issues.component';


@Component({
    templateUrl : './addissue.component.html',
    styleUrls : ['./addissue.component.css']
})

export class AddIssueComponent {
   
    private severityTypes : any = [
        { id : '01Minor' , name : 'Minor' },
        { id : '02Major' , name : 'Major' },
        { id : '03Critical' , name : 'Critical' }
      ]
      
      issueStatus : any = [
        { id : '01' , name : 'Open' },
        { id : '02' , name : 'In-Progress' },
        { id : '03' , name : 'Closed' }
      ]
}
