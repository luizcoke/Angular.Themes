import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@avanade/theme';

@Component({
  selector: 'nb-sidebar-test',
  styles: [
    `
    :host /deep/ layout-column {
      background-color: #76ecff;
    }
    `,
  ],
  template: `
    <layout-page>
      <layout-header fixed>
        <a href="#" class="navbar-brand">App</a>

        <button id="collapse-left" (click)="collapseLeft()">Collapse Left</button>
        <button id="collapse-right" (click)="collapseRight()">Collapse Right</button>
      </layout-header>

      <sidebar-layout state="collapsed" fixed tag="left"></sidebar-layout>

      <sidebar-layout right state="compacted" tag="right">
        <sidebar-header>Header</sidebar-header>
        {{ content }}
      </sidebar-layout>

      <layout-column left>
       {{ content }}
      </layout-column>
      <layout-column>
       {{ content }}
      </layout-column>
      <layout-column>
       {{ content }}
      </layout-column>

      <layout-footer fixed>
        &copy; footer
      </layout-footer>
    </layout-page>
`,
})
export class NbSidebarTestComponent implements OnInit {

  content = 'First ';

  constructor(private sidebarService: SidebarService) { }

  collapseLeft() {
    this.sidebarService.toggle(false, 'left');
  }

  collapseRight() {
    this.sidebarService.toggle(true, 'right');
  }

  ngOnInit() {

    for (let i = 0; i < 1000; i++) {
      this.content += 'App ';
    }
    this.content += ' Last';
  }
}
