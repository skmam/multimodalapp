import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { EventService } from 'src/app/_services/event.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-additionalmemberdetails-card',
  templateUrl: './additionalmemberdetails-card.component.html',
  styleUrls: ['./additionalmemberdetails-card.component.css']
})
export class AdditionalmemberdetailsCardComponent implements OnInit {
  member: Member;

  constructor(private eventService: EventService,
    private memberService: MembersService) { }

  ngOnInit(): void {
    this.eventService.on<string>().subscribe(username => {
      if (username) {
        this.memberService.getMember(username).subscribe(member => {
          this.member = member;
        });
      }      
    });
  }

}
