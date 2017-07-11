import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-meet-golem',
  templateUrl: './meet-golem.component.html',
  styleUrls: ['./meet-golem.component.css']
})

export class MeetGolemComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
