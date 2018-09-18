import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { icons } from './material-icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nmi-icon',
  styleUrls: ['./ng-mat-icons.component.scss'],
  template: `<i class="material-icons">{{ content }}</i>`,
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

  content: string;
}
