import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { icons } from './material-icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nmi-icon',
  styleUrls: ['./ng-mat-icons.component.scss'],
  template: `
    <i class="material-icons"
       [attr.aria-label]="label"
       [attr.aria-hidden]="!label"
       [ngClass]="{
        'size-sm': cssSize === 'sm',
        'size-md': cssSize === 'md',
        'size-lg': cssSize === 'lg',
        'size-xl': cssSize === 'xl'
       }"
    >{{ content }}</i>
  `,
})
export class NgMatIconsComponent {
  @Input()
  set name(name: string) {
    if (icons[name.toLowerCase()]) {
      this.content = name.toLowerCase();
      return;
    }

    // Try with Numeric Character Reference or code point
    const match = name.match(/^(?:&#x)?(e[0-9a-f]{3});?$/i);
    if (!!match && !!match[1]) {
      this.content = `&#x${match[1]};`.toLowerCase();
      return;
    }

    console.warn(`Ng Material Icons: Invalid name given: ${name}`);
  }

  @Input()
  label: string;

  @Input()
  set size(size: string) {
    if (!size) {
      return;
    }

    switch (size) {
      case '18':
      case 'sm':
        this.cssSize = 'sm';
        break;

      case '24':
      case 'md':
        this.cssSize = 'md';
        break;

      case '36':
      case 'lg':
        this.cssSize = 'lg';
        break;

      case '48':
      case 'xl':
        this.cssSize = 'xl';
        break;

      default:
        console.warn(`Ng Material Icons: Invalid size given: ${size}`);
        break;
    }
  }

  content: string;
  cssSize: string;
}
