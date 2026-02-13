import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { MemoryTimelineComponent } from './components/memory-timeline/memory-timeline.component';
import { ApologyComponent } from './components/apology/apology.component';
import { CuteInteractionComponent } from './components/cute-interaction/cute-interaction.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { FooterComponent } from './components/footer/footer.component';

import { FallingPetalsComponent } from './components/falling-petals/falling-petals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    MemoryTimelineComponent,
    ApologyComponent,
    CuteInteractionComponent,
    MusicPlayerComponent,
    FooterComponent,
    FallingPetalsComponent
  ],
  template: `
    <main class="w-full overflow-x-hidden bg-deep-night min-h-screen">
      <app-falling-petals></app-falling-petals>
      <app-hero-section></app-hero-section>
      <app-memory-timeline></app-memory-timeline>
      <app-apology></app-apology>
      <app-cute-interaction></app-cute-interaction>
      
      <app-music-player></app-music-player>
      <app-footer></app-footer>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'romantic-web-experience';
}
