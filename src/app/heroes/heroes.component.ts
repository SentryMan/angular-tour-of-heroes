import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[];

  deadhero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(hero: Hero): void {
    console.log(hero);
    if (!hero.name || !hero.heroName || !hero.quirk) { return; }

    this.heroService.addHero(hero)
      .subscribe( newhero => {
        console.log(newhero);
        this.heroes.push(newhero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {this.getHeroes(); }
}
