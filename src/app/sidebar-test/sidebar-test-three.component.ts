import { Component } from '@angular/core';

@Component({
  selector: 'nb-sidebar-test-three',
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

      <sidebar-layout state="collapsed">
        Left
      </sidebar-layout>

      <sidebar-layout state="compacted" fixed right>
        Right
      </sidebar-layout>

      <layout-footer></layout-footer>

    </layout-page>
`,
})
export class NbSidebarTestThreeComponent {
}
