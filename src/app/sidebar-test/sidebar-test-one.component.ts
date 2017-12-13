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
      <nb-sidebar>
        Left
      </nb-sidebar>

      <nb-sidebar right>
        Right
      </nb-sidebar>
    </layout-page>
`,
})
export class NbSidebarTestOneComponent {
}
