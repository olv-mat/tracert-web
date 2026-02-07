import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advantages-card',
  imports: [CommonModule],
  templateUrl: './advantages-card.html',
  styleUrl: './advantages-card.sass',
})
export class AdvantagesCard {
  @Input({ required: true }) public icon!: string;
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public description!: string;
}
