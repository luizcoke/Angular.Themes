import { Component } from '@angular/core';

@Component({
  selector: 'nb-user-test',
  styles: [
    `
      .test-row {
        margin: 20px;
      }
    `,
  ],
  template: `
    <layout-page id="layout-fluid">
      <layout-header fixed>
        <nb-user showInitials size="medium" name="Dmitry Nehaychik" title="Worker"
                  [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nb-user>
      </layout-header>


      <layout-column>
        <div class="test-row">
          <nb-user inverse></nb-user>
        </div>
        <div class="test-row">
          <nb-user inverse showInitials></nb-user>
        </div>
        <div class="test-row">
          <nb-user inverse size="large" name="Dmitry Nehaychik"></nb-user>
        </div>
        <div class="test-row">
          <nb-user inverse name="Dmitry Nehaychik" title="Worker"></nb-user>
        </div>
        <div class="test-row">
          <nb-user inverse size="small" name="Dmitry Nehaychik" title="Worker" showTitle="false"></nb-user>
        </div>
        <div class="test-row">
          <nb-user inverse onlyPicture size="medium" name="Dmitry Nehaychik" title="Worker"></nb-user>
        </div>
        <div class="test-row">
          <nb-user inverse size="medium" name="Dmitry Nehaychik" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nb-user>
        </div>
        <div class="test-row">
          <nb-user inverse onlyPicture size="medium" name="Dmitry Nehaychik" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nb-user>
        </div>
        <div class="test-row">
          <nb-user inverse size="large" picture="http://lorempixel.com/400/200/animals/"
                    name="Dmitry Nehaychik" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nb-user>
        </div>
        <div class="test-row">
          <nb-user inverse showInitials size="medium" name="Dmitry Nehaychik" title="Worker"
                    [menu]="contextMenu" (menuClick)="onMenuItemClick($event)"></nb-user>
        </div>
      </layout-column>
    </layout-page>
  `,
})
export class NbUserTestComponent {

  contextMenu = [
    { title: 'Profile', link: 'some/link', icon: 'nb-person' },
    { title: 'Billing', target: '_blank', url: 'http://app.com' },
    { title: 'Exit', key: 'exit' },
  ];

  onMenuItemClick(event) {
    console.info(event);
  }
}
