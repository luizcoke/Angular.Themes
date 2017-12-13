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

      <layout-header></layout-header>

      <sidebar-layout>
        Left
      </sidebar-layout>

      <sidebar-layout right fixed>
        Right
      </sidebar-layout>

      <layout-footer></layout-footer>

    </layout-page>
`,
})
export class NbSidebarTestTwoComponent {
}
