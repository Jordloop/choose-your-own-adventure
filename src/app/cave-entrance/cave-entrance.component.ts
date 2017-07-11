import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-cave-entrance',
  templateUrl: './cave-entrance.component.html',
  styleUrls: ['./cave-entrance.component.css'],
  providers: [CharacterService]
})

export class CaveEntranceComponent implements OnInit {
  character;
  // FirebaseObjectObservable<any>;
  // characters: FirebaseListObservable<any[]>;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacter().subscribe(dataLastEmittedFromObserver => {
      this.character = dataLastEmittedFromObserver;
      console.log(this.character);
    })

    // console.log(this.character);
  }

}
