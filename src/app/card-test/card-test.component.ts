import { Component } from '@angular/core';

@Component({
  selector: 'box-test',
  template: `
    <layout-page>
      <layout-column>
        <box *ngFor="let card of cards" [size]="card.size" [status]="card.status">
          <box-header>
            <span>Header</span>
          </box-header>
          <box-body *ngIf="card.size !== 'xxsmall'">
            <span>Body</span>
          </box-body>
          <box-footer *ngIf="card.size !== 'xxsmall'">
            <span>Footer</span>
          </box-footer>
        </box>
      </layout-column>
    </layout-page>
  `,
})
export class NbCardTestComponent {

  sizes = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
  statuses = ['primary', 'success', 'info', 'warning', 'danger', 'active', 'disabled'];

  cards: any[];

  constructor() {
    this.cards = this.prepareCards();
  }

  private prepareCards(): any[] {
    const result = [];

    this.statuses.forEach(status => {
      this.sizes.forEach(size => {
        result.push({
          size,
          status,
        });
      });
    });

    return result;
  }
}
