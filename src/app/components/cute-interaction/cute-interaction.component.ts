import { Component, signal, WritableSignal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-cute-interaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cute-interaction.component.html',
  styleUrls: ['./cute-interaction.component.scss']
})
export class CuteInteractionComponent {

  @ViewChild('sectionContainer', { static: true }) sectionContainer!: ElementRef;
  @ViewChild('runBtn', { static: true }) runBtn!: ElementRef;
  isForgiven: WritableSignal<boolean> = signal(false);

  buttonStyle: any = {
    transition: 'transform 0.2s ease-out'
  };

  moveButton() {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 300;
    this.buttonStyle = {
      transform: `translate(${x}px, ${y}px)`,
      transition: 'transform 0.2s ease-out'
    };
  }



  onForgive() {
    this.isForgiven.set(true);
    this.triggerMassiveConfetti();
  }

  triggerMassiveConfetti() {
    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 100,
        origin: { x: 0 },
        colors: ['#FFC1CC', '#FF4D6D', '#FFDAB9']
      });
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 100,
        origin: { x: 1 },
        colors: ['#FFC1CC', '#FF4D6D', '#FFDAB9']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}
