import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];

  public deleteHero?: string;

  public deleteHeroe(): void {
    this.deleteHero = this.heroes.pop();
  }
}
