import { Component, OnInit } from '@angular/core';
import messages from 'src/app/messages';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNAvComponent implements OnInit {
  
  Messages:any[];
  constructor() { }

  ngOnInit() {
    this.Messages=messages;
  }

}
