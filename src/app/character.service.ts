import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;
  character: FirebaseObjectObservable<any>;
  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('characters');
    this.character = database.object('/characters')
  }
  getCharacters(){
    return this.characters;
  }

  getCharacter(){
    return this.character;
  }

  addCharacter(newCharacter: Character){
    this.characters.push(newCharacter);
  }

  getCharacterByID(characterId: string){
    return this.database.object('characters/' + characterId);
  }


}
