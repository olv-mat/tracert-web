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
  @Input({ required: true }) public icon!: string;
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public description!: string;
  @Input({ required: true }) public useCases!: string[];
}
