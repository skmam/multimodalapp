import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { EventService } from 'src/app/_services/event.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
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
