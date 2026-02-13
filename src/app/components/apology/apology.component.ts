import { Component, signal, WritableSignal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeartbeatService } from '../../services/heartbeat.service';

@Component({
  selector: 'app-apology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apology.component.html',
  styleUrls: ['./apology.component.scss']
})
export class ApologyComponent {
  heartbeatService = inject(HeartbeatService);
  steps = [
    "Hey...",
    "I know I messed up...",
    "And I'm really sorry 😔",
    "Can you forgive me? ❤️"
  ];

  currentStepIndex: WritableSignal<number> = signal(0);

  currentText = computed(() => this.steps[this.currentStepIndex()]);

  nextStep() {
    if (this.currentStepIndex() < this.steps.length - 1) {
      this.currentStepIndex.update(i => i + 1);
    }
  }

  get heartScale() {
    return 1 + (this.currentStepIndex() * 0.1);
  }
}
