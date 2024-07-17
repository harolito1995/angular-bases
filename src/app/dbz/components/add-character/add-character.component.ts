import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public characters: Character = {
    name: '',
    power: 0
  };


  emitCharacter(): void {
    if (this.characters.name.length === 0) {
      return;
    } else {
      this.onNewCharacter.emit(this.characters);
      this.characters = {
        name: '',
        power: 0
      };
    }
  }





}
