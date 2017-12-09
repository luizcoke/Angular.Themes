/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

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
    <nb-layout>
      <nb-layout-header fixed>
        <a href="#" class="navbar-brand">Akveo</a>
        <button id="add-dynamic" (click)="addDynamicComponent()">Add Dynamic Copmonent</button>
        <button id="clear-dynamic" (click)="clearDynamicComponents()">Clear Dynamic Copmonents</button>
      </nb-layout-header>

      <nb-sidebar right>
          Sidebar content
      </nb-sidebar>

      <nb-layout-column>
        <nb-card>
          <nb-card-header>Hello</nb-card-header>
          <nb-card-body>
            Some Test content
          </nb-card-body>
        </nb-card>
      </nb-layout-column>


      <nb-layout-footer fixed>
        &copy; Akveo 2017
      </nb-layout-footer>
    </nb-layout>
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
