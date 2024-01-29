import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedService } from './services/shared.service';
import { Author } from './interfaces/author.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    FooterComponent,
    MaterialModule,
    CommonModule,
    RouterLink,
    HttpClientModule,
  ],
  providers: [SharedService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  author$: Observable<Author | null> = this.sharedService.getAuthor();
  isDesktop = true;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sharedService: SharedService,
    ) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      window.onresize = () => this.checkScreenSize();
    }
    
  }

  private checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = window.innerWidth > 768;
    }
  }
}
