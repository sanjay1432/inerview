import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  constructor( public router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    let user = {
      email: this.email.value,
      name: this.name.value
    }
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/startInterview']);
  }
}
