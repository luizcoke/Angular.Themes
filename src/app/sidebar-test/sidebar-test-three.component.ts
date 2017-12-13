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

      <nb-sidebar state="collapsed">
        Left
      </nb-sidebar>

      <nb-sidebar state="compacted" fixed right>
        Right
      </nb-sidebar>

      <layout-footer></layout-footer>

    </layout-page>
`,
})
export class NbSidebarTestThreeComponent {
}
