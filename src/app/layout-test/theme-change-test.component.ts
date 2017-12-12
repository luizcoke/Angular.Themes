import { Component } from '@angular/core';
import { NbThemeService } from '@avanade/theme';

@Component({
  selector: 'nb-change-theme-test',
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <a href="#" class="navbar-brand">App</a>
        <button id="change-theme" (click)="changeTheme()">Change Theme</button>
      </nb-layout-header>

      <nb-sidebar right>
          Sidebar content
      </nb-sidebar>

      <nb-layout-column>
        <nb-card>
          <nb-card-header>Main contnet</nb-card-header>
          <nb-card-body>
            Content
          </nb-card-body>
        </nb-card>
      </nb-layout-column>

      <nb-layout-footer fixed>
        &copy; footer
      </nb-layout-footer>
    </nb-layout>
`,
})
export class NbThemeChangeTestComponent {
  currentTheme = 'default';

  constructor(private themeService: NbThemeService) { }

  changeTheme() {
    this.currentTheme = this.currentTheme === 'default' ? 'go-orange' : 'default';
    this.themeService.changeTheme(this.currentTheme);
  }
}
