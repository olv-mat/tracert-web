import { Component } from '@angular/core';
import { Header } from '../../components/header/header';

// ng generate component <component>

@Component({
  selector: 'app-landing',
  imports: [Header],
  templateUrl: './landing.html',
  styleUrl: './landing.sass',
})
export class Landing {}
