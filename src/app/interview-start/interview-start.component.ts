import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../interview.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-interview-start',
  templateUrl: './interview-start.component.html',
  styleUrls: ['./interview-start.component.css']
})
export class InterviewStartComponent implements OnInit {

  interval;
  secondcount = 0;
  minutescount = 0;
  started = false;
  finish = false;
  report = false;

// Introduction

  intro = false;
  introInterval;
  introsecondcount = 0;
  introminutescount = 0;
  introdunctionscore = 0;
  iB = false;
// technical
technicalintro = false;
technicalintroInterval;
technicalintrosecondcount = 0;
technicalintrominutescount = 0;
technicalintrodunctionscore = 0;
tiB = false;

// livecode
livecode = false;
livecodeInterval;
livecodesecondcount = 0;
livecodeminutescount = 0;
livecodescore = 0;
lcB = false;


// explanation
explanation = false;
explanationInterval;
explanationsecondcount = 0;
explanationminutescount = 0;
explanationscore = 0;
exB = false;


// evaluation
evaluation = false;
evaluationInterval;
evaluationsecondcount = 0;
evaluationminutescount = 0;
evB = false;

  localData = {
    totalTimeMin: 0,
    totalTimeSec: 0,
    introductionMin: 0,
    introductionSec: 0,
    introductionScore: 0,
    technicalintroductionMin: 0,
    technicalintroductionSec: 0,
    technicalintroductionScore: 0,
    livecodeMin: 0,
    livecodeSec: 0,
    livecodeScore: 0,
    explanationMin: 0,
    explanationSec: 0,
    explanationScore: 0,
    evaluationMin: 0,
    evaluationSec: 0
  };

  dataFromLocalStorage;
  user: any;
  constructor(private interviewService: InterviewService,  public router: Router) { }

  ngOnInit() {
   this.dataFromLocalStorage = JSON.parse(this.interviewService.getDataFromLocalStorage());
    if (this.dataFromLocalStorage) {
      this.localData = this.dataFromLocalStorage;
      this.minutescount = this.dataFromLocalStorage.totalTimeMin;
      this.secondcount = this.dataFromLocalStorage.totalTimeSec;

      this.introminutescount = this.dataFromLocalStorage.introductionMin;
      this.introsecondcount = this.dataFromLocalStorage.introductionSec;
      this.introdunctionscore = this.dataFromLocalStorage.introductionScore;

      this.technicalintrominutescount = this.dataFromLocalStorage.technicalintroductionMin;
      this.technicalintrosecondcount = this.dataFromLocalStorage.technicalintroductionSec;
      this.technicalintrodunctionscore = this.dataFromLocalStorage.technicalintroductionScore;

      this.livecodeminutescount = this.dataFromLocalStorage.livecodeMin;
      this.livecodesecondcount = this.dataFromLocalStorage.livecodeSec;
      this.livecodescore = this.dataFromLocalStorage.livecodeScore;

      this.explanationminutescount = this.dataFromLocalStorage.explanationMin;
      this.explanationsecondcount = this.dataFromLocalStorage.explanationSec;
      this.explanationscore = this.dataFromLocalStorage.explanationScore;

      this.evaluationminutescount = this.dataFromLocalStorage.evaluationMin;
      this.evaluationsecondcount = this.dataFromLocalStorage.evaluationSec;
    }
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  next(num) {
   if (num === 1) {
    this.iB = false;
    this.tiB = true;
   }
   if (num === 2) {
    this.tiB = false;
    this.lcB = true;
   }
   if (num === 3) {
    this.lcB = false;
    this.exB = true;
   }

   if (num === 4) {
    this.exB = false;
    this.evB = true;
   }

  }

  back(num) {
    if (num === 2) {
      this.iB = true;
      this.tiB = false;
     }
     if (num === 3) {
      this.tiB = true;
      this.lcB = false;
     }
     if (num === 4) {
      this.lcB = true;
      this.exB = false;
     }
     if (num === 5) {
      this.exB = true;
      this.evB = false;
     }
  }
  startTimer() {
    this.started = true;
    this.iB = true;
    this.interval = setInterval(() => {
      this.secondcount++;
      this.secondcount =  this.secondcount;
      if (this.secondcount > 59) {
        this.secondcount = 0;
        this.minutescount++;
      }

    this.localData.totalTimeMin = this.minutescount;
    this.localData.totalTimeSec = this.secondcount;
    this.interviewService.SaveDataToLocalStorage(this.localData);
    }, 1000);

  }

  pauseTimer() {
    this.started = true;
    this.finish = false;
    clearInterval(this.interval);
    this.report = true;
  }

  // Introduction

  startIntroTimer() {
    this.intro = true;
    this.introInterval = setInterval(() => {
      this.introsecondcount++;
      if (this.introsecondcount > 59) {
        this.introsecondcount = 0;
        this.introminutescount++;
      }
      this.localData.introductionMin = this.introminutescount;
      this.localData.introductionSec = this.introsecondcount;
      this.interviewService.SaveDataToLocalStorage(this.localData);
    }, 1000);
  }

  pauseIntroTimer() {
    this.intro = false;
    clearInterval(this.introInterval);
  }

  introscore(e) {
    this.localData.introductionScore = e.value;
    this.interviewService.SaveDataToLocalStorage(this.localData);
  }

  // Technical Introduction
  startTechnicalIntroTimer() {
    this.technicalintro = true;
    this.technicalintroInterval = setInterval(() => {
      this.technicalintrosecondcount++;
      if (this.technicalintrosecondcount > 59) {
        this.technicalintrosecondcount = 0;
        this.technicalintrominutescount++;
      }
      this.localData.technicalintroductionMin = this.technicalintrominutescount;
      this.localData.technicalintroductionSec = this.technicalintrosecondcount;
      this.interviewService.SaveDataToLocalStorage(this.localData);
    }, 1000);
  }

  pauseTechnicalIntroTimer() {
    this.technicalintro = false;
    clearInterval(this.technicalintroInterval);
  }

  Technicalintroscore(e) {
    this.localData.technicalintroductionScore = e.value;
    this.interviewService.SaveDataToLocalStorage(this.localData);
  }

  // LiveCode

  startliveCodeTimer() {
    this.livecode = true;
    this.livecodeInterval = setInterval(() => {
      this.livecodesecondcount++;
      if (this.livecodesecondcount > 59) {
        this.livecodesecondcount = 0;
        this.livecodesecondcount++;
      }
      this.localData.livecodeMin = this.livecodeminutescount;
      this.localData.livecodeSec = this.livecodesecondcount;
      this.interviewService.SaveDataToLocalStorage(this.localData);
    }, 1000);
  }

  pauseliveCodeTimer() {
    this.livecode = false;
    clearInterval(this.livecodeInterval);
  }

  liveCodescore(e) {
    this.localData.livecodeScore = e.value;
    this.interviewService.SaveDataToLocalStorage(this.localData);
  }


   // Explanation

   startExplanationTimer() {
    this.explanation = true;
    this.explanationInterval = setInterval(() => {
      this.explanationsecondcount++;
      if (this.explanationsecondcount > 59) {
        this.explanationsecondcount = 0;
        this.explanationsecondcount++;
      }
      this.localData.explanationMin = this.explanationminutescount;
      this.localData.explanationSec = this.explanationsecondcount;
      this.interviewService.SaveDataToLocalStorage(this.localData);
    }, 1000);
  }

  pauseExplanationTimer() {
    this.explanation = false;
    clearInterval(this.explanationInterval);
  }

  explanationScore(e) {
    this.localData.explanationScore = e.value;
    this.interviewService.SaveDataToLocalStorage(this.localData);
  }

// Evaluation

  startEvaluationTimer() {
    this.evaluation = true;
    this.evaluationInterval = setInterval(() => {
      this.evaluationsecondcount++;
      if (this.evaluationsecondcount > 59) {
        this.evaluationsecondcount = 0;
        this.evaluationsecondcount++;
      }
      this.localData.evaluationMin = this.evaluationminutescount;
      this.localData.evaluationSec = this.evaluationsecondcount;
      this.interviewService.SaveDataToLocalStorage(this.localData);
    }, 1000);

  }

  pauseEvaluationTimer() {
    this.evaluation = false;
    this.evB = false;
    this.finish = true;
    this.started = true;
    clearInterval(this.evaluationInterval);
  }

  generateReport() {
    this.router.navigate(['/interviewReport']);
  }

}
