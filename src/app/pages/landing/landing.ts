import { Component } from '@angular/core';
import { Advantages } from '../../components/advantages/advantages';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';

// ng generate component <component>

@Component({
  selector: 'app-landing',
  imports: [Header, Hero, Advantages, Services],
  templateUrl: './landing.html',
  styleUrl: './landing.sass',
})
export class Landing {}
