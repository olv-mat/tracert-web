import { Component } from '@angular/core';
import { Advantages } from '../../components/advantages/advantages';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';

// ng generate component <component>

@Component({
  selector: 'app-landing',
  imports: [Header, Hero, Advantages],
  templateUrl: './landing.html',
  styleUrl: './landing.sass',
})
export class Landing {}
