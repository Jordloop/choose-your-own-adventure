import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})

export class CreateCharacterComponent {
  createCharacter(name: string, gender: string) {
    var newCharacter: Character = new Character(name, gender);
    console.log(newCharacter.name);
    console.log(newCharacter.gender);
  }



}
