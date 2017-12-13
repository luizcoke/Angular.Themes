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
        <box>
          <box-header>Breakpoint</box-header>
          <box-body>
            <p>Resize the window to the next/prev breakpoint to see the change</p>
            <div> Prev breakpoint : <strong>{{ change[0]?.name }} ({{ change[0]?.width }})</strong></div>
            <div> Current breakpoint : <strong>{{ change[1]?.name }} ({{ change[1]?.width }})</strong></div>
          </box-body>
        </box>
      </layout-column>

      <layout-footer fixed>
        &copy; footer
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
