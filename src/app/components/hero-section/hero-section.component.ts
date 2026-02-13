import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  displayedText: WritableSignal<string> = signal("");
  showButton: WritableSignal<boolean> = signal(false);

  private text1 = "I'm Sorry Shirin❤️";
  private text2 = "But I Still Choose You. Every. Single. Day.";
  private typingSpeed = 100;

  valentineEmojis = ['❤️', '🌹', '🧸', '🍫', '💌', '💍', '💖', '💘'];

  ngOnInit() {
    this.startTypingSequence();
  }

  async startTypingSequence() {
    await this.typeText(this.text1);
    await new Promise(resolve => setTimeout(resolve, 1500));
    this.displayedText.set("");
    await this.typeText(this.text2);
    this.showButton.set(true);
  }

  async typeText(text: string) {
    for (let i = 0; i < text.length; i++) {
      this.displayedText.update(current => current + text.charAt(i));
      await new Promise(resolve => setTimeout(resolve, this.typingSpeed));
    }
  }

  onLoveClick() {
    this.triggerConfetti();
    setTimeout(() => {
      const memorySection = document.getElementById('memory-timeline');
      if (memorySection) {
        memorySection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  }

  triggerConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFC1CC', '#FF4D6D', '#E6E6FA']
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFC1CC', '#FF4D6D', '#E6E6FA']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}
