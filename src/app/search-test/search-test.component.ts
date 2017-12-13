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
        <nb-card>
          <nb-card-header>
            <span>Header</span>
          </nb-card-header>
          <nb-card-body>
            <span>Body</span>
          </nb-card-body>
          <nb-card-footer>
            <span>Footer</span>
          </nb-card-footer>
        </nb-card>
        <nb-card size="small">
          <nb-card-header>
            <span>Header</span>
          </nb-card-header>
          <nb-card-body>
            <span>Body</span>
          </nb-card-body>
          <nb-card-footer>
            <span>Footer</span>
          </nb-card-footer>
        </nb-card>
        <nb-card size="medium">
          <nb-card-header>
            <span>Header</span>
          </nb-card-header>
          <nb-card-body>
            <span>Body</span>
          </nb-card-body>
          <nb-card-footer>
            <span>Footer</span>
          </nb-card-footer>
        </nb-card>
        <nb-card size="large">
          <nb-card-header>
            <span>Header</span>
          </nb-card-header>
          <nb-card-body>
            <span>Body</span>
          </nb-card-body>
          <nb-card-footer>
            <span>Footer</span>
          </nb-card-footer>
        </nb-card>
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
