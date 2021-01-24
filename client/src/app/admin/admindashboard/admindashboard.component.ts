import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  createUserMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  createUserToggle() {
    this.createUserMode = !this.createUserMode;
  }

  cancelCreateUserMode(event: boolean) {
    this.createUserMode=event;
  }

}
