import { Component, OnInit } from '@angular/core';
import { IIssues } from './issues';
import { IssueService } from './issue.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issueDetailTitle : string = "Issues Detail";
 issues : IIssues[] = [];
 errorMessage: any;

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

  get SeverityTypes(){
    return this.severityTypes;
  }

  constructor(private issueService : IssueService) {
   
   }

  ngOnInit() {
    this.issueService.getIssues().subscribe(
      issues => {
        this.issues = issues;
      },
      error => this.errorMessage = <any>error
    );
  }


}
