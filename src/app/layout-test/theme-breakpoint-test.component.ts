/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';

import { NbMediaBreakpointsService, NbThemeService } from '@avanade/theme';

@Component({
  selector: 'nb-breakpoint-test',
  template: `
    <layout-page>
      <layout-header fixed>
        <a href="#" class="navbar-brand">App</a>
      </layout-header>

      <layout-column>
        <nb-card>
          <nb-card-header>Breakpoint</nb-card-header>
          <nb-card-body>
            <p>Resize the window to the next/prev breakpoint to see the change</p>
            <div> Prev breakpoint : <strong>{{ change[0]?.name }} ({{ change[0]?.width }})</strong></div>
            <div> Current breakpoint : <strong>{{ change[1]?.name }} ({{ change[1]?.width }})</strong></div>
          </nb-card-body>
        </nb-card>
      </layout-column>

      <layout-footer fixed>
        &copy; footer 2017
      </layout-footer>
    </layout-page>
  `,
})
export class NbThemeBreakpointTestComponent {

  change: any = [];

  constructor(private themeService: NbThemeService) {
    this.themeService.onMediaQueryChange()
      .subscribe((change: any) => {
        this.change = change;
      });
  }
}
