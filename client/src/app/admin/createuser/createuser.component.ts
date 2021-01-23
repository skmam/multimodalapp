import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  @Input() usersFromDashboard: any;
  @Output() cancelCreateUser = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  createuser() {
    this.accountService.createuser(this.model);
  }

  cancel() {
    this.cancelCreateUser.emit(false);
  }

}
