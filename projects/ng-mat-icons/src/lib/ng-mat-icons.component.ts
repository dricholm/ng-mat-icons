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

    console.warn(`Ng Material Icons: Invalid name: ${name}`);
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
        console.warn(`Ng Material Icons: Invalid size: ${size}`);
        this.cssSize = 'size-md';
        break;
    }
  }

  @Input()
  set color(color: string) {
    if (!color) {
      return;
    }

    switch (color) {
      case 'dark':
        this.cssColor = 'dark';
        break;

      case 'light':
        this.cssColor = 'light';
        break;

      default:
        console.warn(`Ng Material Icons: Invalid color: ${color}`);
        break;
    }
  }

  @Input()
  set inactive(inactive: boolean) {
    if (inactive == null) {
      return;
    }

    switch (this.cssColor) {
      case 'dark':
      case 'light':
        this.cssInactive = inactive;
        break;

      default:
        console.warn('Ng Material Icons: Color must be set for inactive');
        this.cssInactive = false;
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

  @HostBinding('class.size-sm')
  get sizeSmall(): boolean {
    return this.cssSize === 'size-sm';
  }

  @HostBinding('class.size-md')
  get sizeMedium(): boolean {
    return this.cssSize === 'size-md';
  }

  @HostBinding('class.size-lg')
  get sizeLarge(): boolean {
    return this.cssSize === 'size-lg';
  }

  @HostBinding('class.size-xl')
  get sizeExtra(): boolean {
    return this.cssSize === 'size-xl';
  }

  @HostBinding('class.dark')
  get colorDark(): boolean {
    return this.cssColor === 'dark';
  }

  @HostBinding('class.light')
  get colorLight(): boolean {
    return this.cssColor === 'light';
  }

  @HostBinding('class.inactive')
  get isInactive(): boolean {
    return this.cssInactive;
  }

  content: string;
  cssSize = 'size-md';
  cssColor = '';
  cssInactive = false;
}
