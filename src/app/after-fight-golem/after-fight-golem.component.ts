import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-after-fight-golem',
  templateUrl: './after-fight-golem.component.html',
  styleUrls: ['./after-fight-golem.component.css']
})
export class AfterFightGolemComponent implements OnInit {
   characters: FirebaseListObservable<any[]>;
   
  constructor() { }

  ngOnInit() {
  }

}
