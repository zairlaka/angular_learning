import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Holiday } from '../app.component';

interface ApiResponse {
  date: string;
  time: string
}

@Component({
  selector: 'holiday-checker',
  templateUrl: './holidayChecker.component.html',
  styleUrls: ['./holidayChecker.component.scss']
})
export class HolidayChecker implements OnInit {
  @Input() holidayList: Holiday[];
  URL = `https://jsonmock.hackerrank.com/datetime`;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }
}
