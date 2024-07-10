import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'spiderman';
  public age:  number = 30;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Superman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetHero(): void {
    this.name = 'spiderman';
    this.age = 30;

    document.querySelectorAll('h1')[0].setAttribute('class', 'text-primary');
    document.querySelectorAll('h1').forEach(element => {
      element.innerHTML = '<h1>Desde Angular </h1>'
    })
  }
}
