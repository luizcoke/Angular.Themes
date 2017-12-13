import { Component } from '@angular/core';

@Component({
  selector: 'nb-layout-header-test',
  template: `
    <layout-page>
      <layout-header fixed>
        <a class="navbar-brand" href="#">App</a>
      </layout-header>
    </layout-page>
`,
})
export class NbLayoutHeaderTestComponent {
}
