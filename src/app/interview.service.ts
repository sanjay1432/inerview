import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  constructor() { }

  SaveDataToLocalStorage(data) {
    const receiveddata = JSON.stringify(data);
    localStorage.setItem('session', receiveddata);
  }

  getDataFromLocalStorage() {
    return  localStorage.getItem('session');
  }
}
