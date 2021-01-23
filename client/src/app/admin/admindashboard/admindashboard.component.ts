import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  createUserMode = false;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  createUserToggle() {
    this.createUserMode = !this.createUserMode;
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users);
  }

  cancelCreateUserMode(event: boolean) {
    this.createUserMode=event;
  }

}
