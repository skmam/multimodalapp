import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-memberlist-card',
  templateUrl: './memberlist-card.component.html',
  styleUrls: ['./memberlist-card.component.css']
})
export class MemberlistCardComponent implements OnInit {
  @Input() members: Member[];

  constructor(private eventService: EventService) {
   }

  ngOnInit(): void {
  }

  sendClickedRow(index: any) {
    this.eventService.emit<string>(this.members[index].userName);
  }
}
