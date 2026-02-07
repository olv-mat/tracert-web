import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-card.html',
  styleUrl: './services-card.sass',
})
export class ServicesCard {
  @Input() public icon!: string;
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public useCases: string[] = [];
}
