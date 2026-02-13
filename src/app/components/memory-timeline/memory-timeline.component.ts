import { Component, ElementRef, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Memory {
  date: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-memory-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memory-timeline.component.html',
  styleUrls: ['./memory-timeline.component.scss']
})
export class MemoryTimelineComponent implements OnInit, AfterViewInit {
  memories: Memory[] = [
    { date: 'The Beginning', title: 'The First Time You Smiled at Me', description: 'I knew right then that I was in trouble.', icon: '😍' },
    { date: 'Highlight', title: 'Our Cute Fights', description: 'Even when we argue, you look adorable.', icon: '😡' },
    { date: 'Realization', title: 'The Day I Realized I Can\'t Lose You', description: 'Life is just better with you in it.', icon: '🥺' },
    { date: 'Core Memory', title: 'Late Night Talks', description: 'Talking until 3AM about everything and nothing.', icon: '🌙' },
    { date: 'Promise', title: 'Forever & Always', description: 'No matter what, I am yours.', icon: '💍' }
  ];

  @ViewChildren('memoryCard') memoryCards!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    this.memoryCards.forEach(card => {
      observer.observe(card.nativeElement);
    });
  }
}
