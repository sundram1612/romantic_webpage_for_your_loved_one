import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeartbeatService {
  isPlaying: WritableSignal<boolean> = signal(false);
  private audio: HTMLAudioElement | null = null;

  constructor() {
    this.initAudio();
  }

  private initAudio() {
    this.audio = new Audio();
    this.audio.src = 'assets/furippo-real-heartbeat-472005.mp3';
    this.audio.loop = true;
    this.audio.load();
  }

  toggleHeartbeat() {
    if (!this.audio) this.initAudio();

    if (this.isPlaying()) {
      this.audio?.pause();
      this.isPlaying.set(false);
    } else {
      this.audio?.play().catch(e => console.error('Playback failed:', e));
      this.isPlaying.set(true);
    }
  }
}
