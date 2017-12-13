import { Component } from '@angular/core';

@Component({
  selector: 'nb-forms-test',
  template: `
    <layout-page>
      <layout-column>
        <box>
          <box-body>
            <label class="form-control-label" for="default-form-control">Default Form Control</label>
            <input class="form-control" id="default-form-control" placeholder="Default Form Control">
            <span class="form-control-feedback">Help text</span>
          </box-body>
        </box>

        <box>
          <box-body>
            <div class="has-success">
              <label class="form-control-label" for="success-form-control">Success Form Control</label>
              <input class="form-control form-control-success" id="success-form-control"
                     placeholder="Success Form Control">
              <span class="form-control-feedback">Help text</span>
            </div>
          </box-body>
        </box>

        <box>
          <box-body>
            <div class="has-danger">
              <label class="form-control-label" for="danger-form-control">Danger Form Control</label>
              <input class="form-control form-control-danger" id="danger-form-control"
                     placeholder="Danger Form Control">
              <span class="form-control-feedback">Help text</span>
            </div>
          </box-body>
        </box>
      </layout-column>
    </layout-page>
  `,
})

export class NbFormsTestComponent {
}
