import { Component } from '@angular/core';
import { IssuesComponent } from './issues.component';
import { IssueService } from './issue.service';
import { IIssues } from './issues';


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
      issu : IIssues[];
      constructor(private issueService : IssueService){

      }
      ngOnInit(){
          this.getIssues();
      }

      getIssues(){
          return this.issueService.getIssues().subscribe(
              result => this.issu,
              error => console.log("error ",error)
              )
      }

      addIssue(){
            this.issueService.addIssue().subscribe
            (
                (data:any) => this.getIssues(),
                error => console.log("Error while adding an issue", error)
                );
      }


}
