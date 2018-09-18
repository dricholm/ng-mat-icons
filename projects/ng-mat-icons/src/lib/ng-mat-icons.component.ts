import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import { icons } from './material-icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nmi-icon',
  styleUrls: ['./ng-mat-icons.component.scss'],
  template: '{{ content }}',
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
      this.cssSize = 'size-md';
      return;
    }

    switch (size) {
      case '18':
      case 'sm':
        this.cssSize = 'size-sm';
        break;

      case '24':
      case 'md':
        this.cssSize = 'size-md';
        break;

      case '36':
      case 'lg':
        this.cssSize = 'size-lg';
        break;

      case '48':
      case 'xl':
        this.cssSize = 'size-xl';
        break;

      case 'inherit':
        // Allow override
        this.cssSize = '';
        break;

      default:
        console.warn(`Ng Material Icons: Invalid size given: ${size}`);
        this.cssSize = 'size-md';
        break;
    }
  }

  @HostBinding('attr.aria-label')
  get ariaLabel(): string {
    return this.label;
  }

  @HostBinding('attr.aria-hidden')
  get ariaHidden(): string {
    return this.label ? 'false' : 'true';
  }

  @HostBinding('class')
  get classes(): Array<string> {
    return [this.cssSize];
  }

  content: string;
  cssSize = 'size-md';
}
