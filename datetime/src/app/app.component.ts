import { Component , OnInit } from '@angular/core';
//import { Moment } from 'moment';
import *  as moment from 'moment-timezone';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'datetime';
  moments:any = moment;
  timeZoneNames: any;
  dateTimeForm: FormGroup;
  defaultTimeZone: string;
  dateTimeInserted: any = {};

  constructor(private formBuilder: FormBuilder,
              private appService: AppService) {

  }


  ngOnInit(): void {
    this.initializeForm();
    this.defaultTimeZone = 'UTC'//moment.tz.guess();
    this.timeZoneNames = moment.tz.names();
  }

  initializeForm() {
    this.dateTimeForm = this.formBuilder.group({
      time: [''],
      timeZone: ['']
    })
  }
  
  sendDatetime() {
    console.log(this.dateTimeForm.value);
    this.appService.sendDateTime(this.dateTimeForm.value).subscribe(
      (response) => {
        this.dateTimeInserted.time = response.response.time;
        this.dateTimeInserted.timeZone = response.response.timeZone;
      }
    )
  }
}
