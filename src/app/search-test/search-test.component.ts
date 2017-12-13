import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@avanade/theme';

@Component({
  selector: 'nb-search-test',
  template: `
    <layout-page>
      <layout-header fixed>
        <a class="navbar-brand" href="#">ngx-admin</a>
        <nb-search type="rotate-layout" tag="header-search"></nb-search>
      </layout-header>
      <layout-column>
        <box>
          <box-header>
            <span>Header</span>
          </box-header>
          <box-body>
            <span>Body</span>
          </box-body>
          <box-footer>
            <span>Footer</span>
          </box-footer>
        </box>
        <box size="small">
          <box-header>
            <span>Header</span>
          </box-header>
          <box-body>
            <span>Body</span>
          </box-body>
          <box-footer>
            <span>Footer</span>
          </box-footer>
        </box>
        <box size="medium">
          <box-header>
            <span>Header</span>
          </box-header>
          <box-body>
            <span>Body</span>
          </box-body>
          <box-footer>
            <span>Footer</span>
          </box-footer>
        </box>
        <box size="large">
          <box-header>
            <span>Header</span>
          </box-header>
          <box-body>
            <span>Body</span>
          </box-body>
          <box-footer>
            <span>Footer</span>
          </box-footer>
        </box>
      </layout-column>
    </layout-page>
  `,
})
export class NbSearchTestComponent implements OnInit {

  constructor(private searchService: NbSearchService) {
  }

  ngOnInit() {
    this.searchService.onSearchSubmit().subscribe((data: { term: string, tag: string }) => {
      console.info(`term: ${data.term}, from search: ${data.tag}`);
    });
  }
}
