import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule }        from './app-routing.module';
import { MainComponent } from './main/main.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { InterviewStartComponent } from './interview-start/interview-start.component';
import { InterviewService } from './interview.service';
import { InterviewReportComponent } from './interview-report/interview-report.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InterviewStartComponent,
    InterviewReportComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatButtonModule,
    BrowserAnimationsModule,
    MatChipsModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule
  ],
  providers: [InterviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
