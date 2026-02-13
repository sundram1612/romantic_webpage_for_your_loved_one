import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeartbeatService } from '../../services/heartbeat.service';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent {
  heartbeatService = inject(HeartbeatService);
  showToast = false;

  toggleMusic() {
    this.heartbeatService.toggleHeartbeat();

    if (this.heartbeatService.isPlaying()) {
      this.showToast = true;
      setTimeout(() => this.showToast = false, 3000);
    }
  }
}
