# Ng Material Icons

A library for using Material Icons in Angular.

## Links

- [Documentation](https://dricholm.github.io/ng-mat-icons/)
- [Icon list on Material Design](https://material.io/tools/icons/)
- [Code point list](https://github.com/google/material-design-icons/blob/master/iconfont/codepoints)

## Setup

> Note: Not yet published

1. Install in your project using npm:

```bash
npm install ng-mat-icons
```

2. Import the `NgMatIconsModule` in your module. The recommended way is to include it in a `SharedModule`, which also exports it. Then import the `SharedModule` in other modules of your application. Check [here](https://angular.io/guide/sharing-ngmodules) for additional information.

```typescript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMatIconsModule } from 'ng-mat-icons';

@NgModule({
  imports: [CommonModule, NgMatIconsModule],
  exports: [NgMatIconsModule],
})
export class SharedModule {}
```

3. Now you can begin to use Material Icons in your components.

```html
<!-- Using icon name -->
<nmi-icon name="face"></nmi-icon>

<!-- Using code point -->
<nmi-icon name="e87c"></nmi-icon>

<!-- Adding aria-label -->
<nmi-icon name="face" label="Person"></nmi-icon>

<!-- Setting the size -->
<nmi-icon name="home" size="sm"></nmi-icon>
<nmi-icon name="home" size="md"></nmi-icon>
<nmi-icon name="home" size="lg"></nmi-icon>
<nmi-icon name="home" size="xl"></nmi-icon>

<!-- Setting the color -->
<nmi-icon name="menu" color="dark"></nmi-icon>
<nmi-icon name="menu" color="dark" [inactive]="true"></nmi-icon>
<nmi-icon name="menu" color="light"></nmi-icon>
<nmi-icon name="menu" color="light" [inactive]="true"></nmi-icon>
```

> The full documentation can be found [here](https://dricholm.github.io/ng-mat-icons/). Additional information: [icons and names](https://material.io/tools/icons/) and [icon names with code points](https://github.com/google/material-design-icons/blob/master/iconfont/codepoints).

## Contribution

### Build

Run `ng build` to build the project.

Run `ng build:lib` to build the library. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `npm run test:lib` to execute the unit tests for the library.
