import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { AddIssueComponent } from './issues/addissue.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    AddIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'addissue',component: AddIssueComponent },
      {path : 'viewissues',component: IssuesComponent }
    ])
  ],
  providers: [IssuesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
