import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advantages-card',
  imports: [CommonModule],
  templateUrl: './advantages-card.html',
  styleUrl: './advantages-card.sass',
})
export class AdvantagesCard {
  @Input() public icon!: string;
  @Input() public title!: string;
  @Input() public description!: string;
}
