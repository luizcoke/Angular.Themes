import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@avanade/theme';

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

      <nb-sidebar state="collapsed" fixed tag="left">
      </nb-sidebar>

      <nb-sidebar right state="compacted" tag="right">
        <nb-sidebar-header>Some Header</nb-sidebar-header>
        {{ content }}
      </nb-sidebar>

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
        &copy; footer 2017
      </layout-footer>
    </layout-page>
`,
})
export class NbSidebarTestComponent implements OnInit {

  content = 'First ';

  constructor(private sidebarService: NbSidebarService) { }

  collapseLeft() {
    this.sidebarService.toggle(false, 'left');
  }

  collapseRight() {
    this.sidebarService.toggle(true, 'right');
  }

  ngOnInit() {

    for (let i = 0; i < 1000; i++) {
      this.content += 'Akveo ';
    }
    this.content += ' Last';
  }
}
