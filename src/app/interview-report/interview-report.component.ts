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
  introBar = '0%';
  techintroBar = '0%';
  livecodeBar = '0%';
  explanationBar = '0%';
  totalscore: any;
  constructor(private interviewService: InterviewService) { }

  ngOnInit() {
    this.data = JSON.parse(this.interviewService.getDataFromLocalStorage());
    this.introBar = this.data.introductionScore * 10 + '%';
    this.techintroBar = this.data.technicalintroductionScore * 10 + '%';
    this.livecodeBar = this.data.livecodeScore * 10 + '%';
    this.explanationBar = this.data.explanationScore * 10 + '%';

    this.totalscore = this.data.introductionScore + this.data.technicalintroductionScore +
                      this.data.livecodeScore + this.data.explanationScore / 10 * 100;
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
