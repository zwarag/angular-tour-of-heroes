import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router'

import { HeroService } from "../hero.service";

import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private router: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.router.snapshot.paramMap.get('id')
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
  
  goBack(): void {
    this.location.back();
  }

}
