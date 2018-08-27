import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../interview.service';
@Component({
  selector: 'app-interview-report',
  templateUrl: './interview-report.component.html',
  styleUrls: ['./interview-report.component.css']
})
export class InterviewReportComponent implements OnInit {
  data: any;
  user: any;

  constructor(private interviewService: InterviewService) { }

  ngOnInit() {
    this.data = JSON.parse(this.interviewService.getDataFromLocalStorage());
    this.user = JSON.parse(localStorage.getItem('user'))
  }

}
