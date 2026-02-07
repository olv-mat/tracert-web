import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demonstration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demonstration.html',
  styleUrl: './demonstration.sass',
})
export class Demonstration implements OnInit, OnDestroy {
  public currentIndex = 0;
  private intervalId: any;

  public slides = [
    { image: 'https://placehold.co/600x400', alt: '' },
    { image: 'https://placehold.co/600x400', alt: '' },
    { image: 'https://placehold.co/600x400', alt: '' },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.startAutoplay();
  }

  public ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  public startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.cdr.detectChanges();
    }, 3000);
  }
}
