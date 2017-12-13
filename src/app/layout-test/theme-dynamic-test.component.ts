import { Component } from '@angular/core';
import { NbThemeService } from '@avanade/theme';

@Component({
  selector: 'nb-dynamic-to-add',
  template: `
    <div>
      <strong>hello from dynamically inserted component</strong>
    </div>
  `,
})
export class NbDynamicToAddComponent {}

@Component({
  selector: 'nb-dynamic-test',
  template: `
    <layout-page>
      <layout-header fixed>
        <a href="#" class="navbar-brand">Akveo</a>
        <button id="add-dynamic" (click)="addDynamicComponent()">Add Dynamic Copmonent</button>
        <button id="clear-dynamic" (click)="clearDynamicComponents()">Clear Dynamic Copmonents</button>
      </layout-header>

      <nb-sidebar right>
          Sidebar content
      </nb-sidebar>

      <layout-column>
        <box>
          <box-header>Hello</box-header>
          <box-body>
            Some Test content
          </box-body>
        </box>
      </layout-column>


      <layout-footer fixed>
        &copy; footer 2018
      </layout-footer>
    </layout-page>
`,
})
export class NbThemeDynamicTestComponent {
  constructor(private themeService: NbThemeService) {}

  addDynamicComponent() {
    this.themeService.appendToLayoutTop(NbDynamicToAddComponent).subscribe(cRef => console.info(cRef));
  }

  clearDynamicComponents() {
    this.themeService.clearLayoutTop().subscribe(res => console.info(res));
  }
}
