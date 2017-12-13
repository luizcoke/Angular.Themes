import { Component } from '@angular/core';

@Component({
  selector: 'nb-layout-test',
  styles: [
    `
      :host /deep/ layout-column {
        background-color: #fb75ff;
      }
      :host /deep/ layout-column.right {
        background-color: #aeff34;
      }
      :host /deep/ layout-column.left {
        background-color: #76ecff;
      }

    `,
  ],
  template: `
    <layout-page id="layout-fluid">
      <layout-header fixed>
        <a href="#" class="navbar-brand">App</a>
      </layout-header>

      <layout-column left>
        Left
      </layout-column>
      <layout-column>
        Center
      </layout-column>
      <layout-column>
        Right<br>
        <div style="overflow: hidden">
          <div style="width: 20000px; background: red;">super long </div>
        </div>
      </layout-column>

      <layout-footer>
        &copy; footer
      </layout-footer>
    </layout-page>

    <layout-page center id="layout-center">
      <layout-header fixed>
        <a href="#" class="navbar-brand">App</a>
      </layout-header>

      <layout-column left>
        Left
      </layout-column>
      <layout-column>
        Center
      </layout-column>
      <layout-column>
        Right<br>
        <div style="overflow: hidden">
          <div style="width: 20000px; background: red;">super long </div>
        </div>
      </layout-column>

      <layout-footer fixed>
        &copy; footer
      </layout-footer>
    </layout-page>
`,
})
export class NbLayoutTestComponent {
}
