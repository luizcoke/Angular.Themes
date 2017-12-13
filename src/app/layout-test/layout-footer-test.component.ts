import { Component } from '@angular/core';

@Component({
  selector: 'nb-layout-footer-test',
  template: `
    <layout-page>
      <layout-footer fixed>
        &copy; footer 2017
      </layout-footer>
    </layout-page>
`,
})
export class NbLayoutFooterTestComponent {
}
