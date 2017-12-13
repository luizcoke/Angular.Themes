import { Component, Input, HostBinding } from '@angular/core';

/**
 * Component intended to be used within  the `<box>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * box-header-font-family:
 * box-header-font-size:
 * box-header-font-weight:
 * box-header-fg:
 * box-header-fg-heading:
 * box-header-active-bg:
 * box-header-active-fg:
 * box-header-disabled-bg:
 * box-header-primary-bg:
 * box-header-info-bg:
 * box-header-success-bg:
 * box-header-warning-bg:
 * box-header-danger-bg:
 */
@Component({
  selector: 'box-header',
  template: `<ng-content></ng-content>`,
})
export class BoxHeaderComponent {
}

/**
 * Component intended to be used within  the `<box>` component.
 * Adds styles for a preset body section.
 */
@Component({
  selector: 'box-body',
  template: `<ng-content></ng-content>`,
})
export class BoxBodyComponent {
}

/**
 * Component intended to be used within  the `<box>` component.
 * Adds styles for a preset footer section.
 */
@Component({
  selector: 'box-footer',
  template: `<ng-content></ng-content>`,
})
export class BoxFooterComponent {
}

/**
 * Basic content container component.
 *
 * @example While this component can be used alone, it also provides a number
 * of child components for common box sections:
 * ```
 * <box-header></box-header>
 * <box-body></box-body>
 * <box-footer></box-footer>
 * ```
 *
 * @styles
 *
 * box-line-height:
 * box-font-weight:
 * box-fg-text:
 * box-bg:
 * box-height-xxsmall:
 * box-height-xsmall:
 * box-height-small:
 * box-height-medium:
 * box-height-large:
 * box-height-xlarge:
 * box-height-xxlarge:
 * box-shadow:
 * box-border-radius:
 * box-padding:
 * box-margin:
 * box-separator:
 *
 */
@Component({
  selector: 'box',
  styleUrls: ['./box.component.scss'],
  template: `
    <ng-content></ng-content>
    <ng-content select="box-header"></ng-content>
    <ng-content select="box-body"></ng-content>
    <ng-content select="box-footer"></ng-content>
  `,
})
export class BoxComponent {

  static readonly SIZE_XXSMALL = 'xxsmall';
  static readonly SIZE_XSMALL = 'xsmall';
  static readonly SIZE_SMALL = 'small';
  static readonly SIZE_MEDIUM = 'medium';
  static readonly SIZE_LARGE = 'large';
  static readonly SIZE_XLARGE = 'xlarge';
  static readonly SIZE_XXLARGE = 'xxlarge';

  static readonly STATUS_ACTIVE = 'active';
  static readonly STATUS_DISABLED = 'disabled';
  static readonly STATUS_PRIMARY = 'primary';
  static readonly STATUS_INFO = 'info';
  static readonly STATUS_SUCCESS = 'success';
  static readonly STATUS_WARNING = 'warning';
  static readonly STATUS_DANGER = 'danger';

  size: string;
  status: string;

  @HostBinding('class.xxsmall-box')
  private get xxsmall() {
    return this.size === BoxComponent.SIZE_XXSMALL;
  }

  @HostBinding('class.xsmall-box')
  private get xsmall() {
    return this.size === BoxComponent.SIZE_XSMALL;
  }

  @HostBinding('class.small-box')
  private get small() {
    return this.size === BoxComponent.SIZE_SMALL;
  }

  @HostBinding('class.medium-box')
  private get medium() {
    return this.size === BoxComponent.SIZE_MEDIUM;
  }

  @HostBinding('class.large-box')
  private get large() {
    return this.size === BoxComponent.SIZE_LARGE;
  }

  @HostBinding('class.xlarge-box')
  private get xlarge() {
    return this.size === BoxComponent.SIZE_XLARGE;
  }

  @HostBinding('class.xxlarge-box')
  private get xxlarge() {
    return this.size === BoxComponent.SIZE_XXLARGE;
  }

  @HostBinding('class.active-box')
  private get active() {
    return this.status === BoxComponent.STATUS_ACTIVE;
  }

  @HostBinding('class.disabled-box')
  private get disabled() {
    return this.status === BoxComponent.STATUS_DISABLED;
  }

  @HostBinding('class.primary-box')
  private get primary() {
    return this.status === BoxComponent.STATUS_PRIMARY;
  }

  @HostBinding('class.info-box')
  private get info() {
    return this.status === BoxComponent.STATUS_INFO;
  }

  @HostBinding('class.success-box')
  private get success() {
    return this.status === BoxComponent.STATUS_SUCCESS;
  }

  @HostBinding('class.warning-box')
  private get warning() {
    return this.status === BoxComponent.STATUS_WARNING;
  }

  @HostBinding('class.danger-box')
  private get danger() {
    return this.status === BoxComponent.STATUS_DANGER;
  }

  /**
   * Card size, available sizes:
   * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
   * @param {string} val
   */
  @Input('size')
  private set setSize(val: string) {
    this.size = val;
  }

  /**
   * Card status (adds specific styles):
   * active, disabled, primary, info, success, warning, danger
   * @param {string} val
   */
  @Input('status')
  private set setStatus(val: string) {
    this.status = val;
  }
}
