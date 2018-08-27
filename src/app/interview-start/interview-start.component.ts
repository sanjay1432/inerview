import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../interview.service';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-interview-start',
  templateUrl: './interview-start.component.html',
  styleUrls: ['./interview-start.component.css']
})
export class InterviewStartComponent implements OnInit {

  interval;
  secondcount= 0;
  minutescount = 0;
  started: boolean = false;
  intro: boolean = false;
  introInterval;
  introsecondcount = 0;
  introminutescount = 0;
  introdunctionscore = 0;
//technical
technicalintro: boolean = false;
technicalintroInterval;
technicalintrosecondcount = 0;
technicalintrominutescount = 0;
technicalintrodunctionscore = 0;

//livecode
livecode: boolean = false;
livecodeInterval;
livecodesecondcount = 0;
livecodeminutescount = 0;
livecodescore = 0;
   

//explanation
explanation: boolean = false;
explanationInterval;
explanationsecondcount = 0;
explanationminutescount = 0;
explanationscore = 0;


//evaluation
evaluation: boolean = false;
evaluationInterval;
evaluationsecondcount = 0;
evaluationminutescount = 0;

  localData = {
    totalTimeMin:0,
    totalTimeSec:0,
    introductionMin:0,
    introductionSec:0,
    introductionScore:0,
    technicalintroductionMin:0,
    technicalintroductionSec:0,
    technicalintroductionScore:0,
    livecodeMin:0,
    livecodeSec:0,
    livecodeScore:0,
    explanationMin:0,
    explanationSec:0,
    explanationScore:0,
    evaluationMin:0,
    evaluationSec:0,
  }
  dataFromLocalStorage;
  user: any;
  constructor(private interviewService: InterviewService,  public router: Router) { }

  ngOnInit() {
   this.dataFromLocalStorage = JSON.parse(this.interviewService.getDataFromLocalStorage());
    if(this.dataFromLocalStorage){
      this.localData = this.dataFromLocalStorage
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
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  startTimer() {
    this.started = true;
    this.interval = setInterval(() => {
      this.secondcount++;
      this.secondcount =  this.secondcount;
      if(this.secondcount > 59){
        this.secondcount = 0;
        this.minutescount++;
      }
      
    this.localData.totalTimeMin = this.minutescount
    this.localData.totalTimeSec = this.secondcount
    this.interviewService.SaveDataToLocalStorage(this.localData)
    },1000)

  }

  pauseTimer() {
    this.started = false;
    clearInterval(this.interval);
    this.router.navigate(['/interviewReport']);
  }

  //Introduction

  startIntroTimer() {
    this.intro = true;
    this.introInterval = setInterval(() => {
      this.introsecondcount++;
      if(this.introsecondcount > 59){
        this.introsecondcount = 0;
        this.introminutescount++;
      }
      this.localData.introductionMin = this.introminutescount
      this.localData.introductionSec = this.introsecondcount
      this.interviewService.SaveDataToLocalStorage(this.localData)
    },1000)
  
  }

  pauseIntroTimer() {
    this.intro = false;
    clearInterval(this.introInterval);
  }

  introscore(e){
    console.log(e.value)
    this.localData.introductionScore = e.value
    this.interviewService.SaveDataToLocalStorage(this.localData)
  }

  //Technical Introduction
  startTechnicalIntroTimer() {
    this.technicalintro = true;
    this.technicalintroInterval = setInterval(() => {
      this.technicalintrosecondcount++;
      if(this.technicalintrosecondcount > 59){
        this.technicalintrosecondcount = 0;
        this.technicalintrominutescount++;
      }
      this.localData.technicalintroductionMin = this.technicalintrominutescount
      this.localData.technicalintroductionSec = this.technicalintrosecondcount
      this.interviewService.SaveDataToLocalStorage(this.localData)
    },1000)
  
  }

  pauseTechnicalIntroTimer() {
    this.technicalintro = false;
    clearInterval(this.technicalintroInterval);
  }

  Technicalintroscore(e){
    console.log(e.value)
    this.localData.technicalintroductionScore = e.value
    this.interviewService.SaveDataToLocalStorage(this.localData)
  }

  //LiveCode 

  startliveCodeTimer() {
    this.livecode = true;
    this.livecodeInterval = setInterval(() => {
      this.livecodesecondcount++;
      if(this.livecodesecondcount > 59){
        this.livecodesecondcount = 0;
        this.livecodesecondcount++;
      }
      this.localData.livecodeMin = this.livecodeminutescount
      this.localData.livecodeSec = this.livecodesecondcount
      this.interviewService.SaveDataToLocalStorage(this.localData)
    },1000)
  
  }

  pauseliveCodeTimer() {
    this.livecode = false;
    clearInterval(this.livecodeInterval);
  }

  liveCodescore(e){
    console.log(e.value)
    this.localData.livecodeScore = e.value
    this.interviewService.SaveDataToLocalStorage(this.localData)
  }


   //Explanation 

   startExplanationTimer() {
    this.explanation = true;
    this.explanationInterval = setInterval(() => {
      this.explanationsecondcount++;
      if(this.explanationsecondcount > 59){
        this.explanationsecondcount = 0;
        this.explanationsecondcount++;
      }
      this.localData.explanationMin = this.explanationminutescount
      this.localData.explanationSec = this.explanationsecondcount
      this.interviewService.SaveDataToLocalStorage(this.localData)
    },1000)
  
  }

  pauseExplanationTimer() {
    this.explanation = false;
    clearInterval(this.explanationInterval);
  }

  explanationScore(e){
    console.log(e.value)
    this.localData.explanationScore = e.value
    this.interviewService.SaveDataToLocalStorage(this.localData)
  }

//Evaluation 

startEvaluationTimer() {
  this.evaluation = true;
  this.evaluationInterval = setInterval(() => {
    this.evaluationsecondcount++;
    if(this.evaluationsecondcount > 59){
      this.evaluationsecondcount = 0;
      this.evaluationsecondcount++;
    }
    this.localData.evaluationMin = this.evaluationminutescount
    this.localData.evaluationSec = this.evaluationsecondcount
    this.interviewService.SaveDataToLocalStorage(this.localData)
  },1000)

}

pauseEvaluationTimer() {
  this.evaluation = false;
  clearInterval(this.evaluationInterval);
}

}
