import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 7500
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 9000
    }
  ];


  addCharacter(character:Character):void{

    const newCharacter:Character = {
      ...character,
      id: uuid()
    }
    this.characters.push(newCharacter);
  }


  deleteCharacter(index:number):void{
    this.characters.splice(index,1);
  }
  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id)
  }






}
