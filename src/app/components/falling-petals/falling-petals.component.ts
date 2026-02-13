import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-falling-petals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './falling-petals.component.html',
  styleUrls: ['./falling-petals.component.scss']
})
export class FallingPetalsComponent implements OnInit {
  petals = signal<{ id: number, left: number, delay: string, duration: string }[]>([]);

  ngOnInit() {
    const petalCount = 15;
    const newPetals = [];
    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5 + 's',
        duration: (Math.random() * 5 + 10) + 's'
      });
    }
    this.petals.set(newPetals);
  }
}
