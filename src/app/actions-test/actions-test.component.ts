/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'nb-actions-test',
  template: `
    <layout-page>
      <layout-header>
        <nb-actions>
          <nb-action icon="ion-ios-email-outline" (click)="actionOnClick('first')"></nb-action>
          <nb-action icon="ion-ios-bell-outline"></nb-action>
          <nb-action>
            <nb-user></nb-user>
          </nb-action>
          <nb-action icon="ion-ios-flower-outline"></nb-action>
          <nb-action icon="ion-ios-medical-outline"></nb-action>
          <nb-action icon="ion-ios-download-outline" disabled></nb-action>
          <nb-action>
            Hello
          </nb-action>
        </nb-actions>
      </layout-header>
      <layout-column>

        <box>
          <box-body>
            <nb-actions inverse>
              <nb-action icon="ion-ios-email-outline" (click)="actionOnClick('first')"></nb-action>
              <nb-action icon="ion-ios-bell-outline"></nb-action>
              <nb-action>
                <nb-user></nb-user>
              </nb-action>
              <nb-action icon="ion-ios-flower-outline"></nb-action>
              <nb-action icon="ion-ios-medical-outline"></nb-action>
              <nb-action icon="ion-ios-download-outline" disabled></nb-action>
              <nb-action>
                Hello
              </nb-action>
            </nb-actions>
          </box-body>
        </box>

        <box>
          <box-body>
            <nb-actions inverse size="medium">
              <nb-action icon="ion-ios-email-outline" (click)="actionOnClick('first')"></nb-action>
              <nb-action icon="ion-ios-bell-outline"></nb-action>
              <nb-action>
                <nb-user></nb-user>
              </nb-action>
              <nb-action icon="ion-ios-flower-outline"></nb-action>
              <nb-action icon="ion-ios-medical-outline"></nb-action>
              <nb-action icon="ion-ios-download-outline" disabled></nb-action>
              <nb-action>
                Hello
              </nb-action>
            </nb-actions>
          </box-body>
        </box>

        <box>
          <box-body>
            <nb-actions inverse size="large">
              <nb-action icon="ion-ios-email-outline" (click)="actionOnClick('first')"></nb-action>
              <nb-action icon="ion-ios-bell-outline"></nb-action>
              <nb-action>
                <nb-user></nb-user>
              </nb-action>
              <nb-action icon="ion-ios-flower-outline"></nb-action>
              <nb-action icon="ion-ios-medical-outline"></nb-action>
              <nb-action icon="ion-ios-download-outline" disabled></nb-action>
              <nb-action>
                Hello
              </nb-action>
            </nb-actions>
          </box-body>
        </box>
      </layout-column>
    </layout-page>
  `,
})
export class NbActionsTestComponent {

  actionOnClick(event: any) {
    console.info(event);
  }
}
