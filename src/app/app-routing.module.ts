import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { InterviewStartComponent } from './interview-start/interview-start.component';
import { InterviewReportComponent } from './interview-report/interview-report.component';
const routes: Routes = [
{
    path: '',
    component: MainComponent
},
{
    path: 'startInterview',
    component: InterviewStartComponent
},
{
    path: 'interviewReport',
    component: InterviewReportComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
