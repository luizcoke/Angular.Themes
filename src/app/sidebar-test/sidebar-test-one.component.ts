import { Component } from '@angular/core';

@Component({
  selector: 'nb-sidebar-test-one',
  styles: [
    `
    :host /deep/ layout-column {
      background-color: #76ecff;
    }
    `,
  ],
  template: `
    <layout-page>
      <sidebar-layout>
        Left
      </sidebar-layout>

      <sidebar-layout right>
        Right
      </sidebar-layout>
    </layout-page>
`,
})
export class NbSidebarTestOneComponent {
}
