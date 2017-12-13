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

      <nb-sidebar>
        Left
      </nb-sidebar>

      <nb-sidebar right fixed>
        Right
      </nb-sidebar>

      <layout-footer></layout-footer>

    </layout-page>
`,
})
export class NbSidebarTestTwoComponent {
}
