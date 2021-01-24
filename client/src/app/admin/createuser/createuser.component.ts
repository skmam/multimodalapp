import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  @Output() cancelCreateUser = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService,
      private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  createuser() {
    this.accountService.createuser(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  cancel() {
    this.cancelCreateUser.emit(false);
  }

}
