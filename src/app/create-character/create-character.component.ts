import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
  providers: [CharacterService]
})

export class CreateCharacterComponent  implements OnInit{

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }
  createCharacter(name: string, gender: string) {
    var newCharacter: Character = new Character(name, gender);
    console.log(newCharacter.name);
    console.log(newCharacter.gender);
    this.characterService.addCharacter(newCharacter);
  }



}
