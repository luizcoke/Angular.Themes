import { Component } from '@angular/core';
import { NbThemeService } from '@avanade/theme';

@Component({
  selector: 'nb-change-theme-test',
  template: `
    <layout-page>
      <layout-header fixed>
        <a href="#" class="navbar-brand">App</a>
      </layout-header>
      <nb-sidebar right>
          <p>Sidebar content</p>
          <select id="change-theme" [(ngModel)]="currentTheme" (ngModelChange)="onChange($event)">
            <option *ngFor="let t of themes" [ngValue]="t">{{t}}</option>
          </select>
      </nb-sidebar>

      <layout-column>
        <box>
          <box-header>Main content</box-header>
          <box-body>
            Content
          </box-body>
        </box>
      </layout-column>

      <layout-footer fixed>
        &copy; footer 2018
      </layout-footer>
    </layout-page>
`,
})
export class NbThemeChangeTestComponent {
  currentTheme = 'default';
  themes = ['default', 'cosmic', 'go-orange'];

  constructor(private themeService: NbThemeService) { }

  onChange(value: string) {

    this.currentTheme = value;
    this.themeService.changeTheme(this.currentTheme);
  }
}
