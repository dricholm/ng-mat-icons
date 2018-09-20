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

2. Import the `NgMatIconsModule` in your module. The recommended way is to include it in a `SharedModule`, which also exports it. Then import the `SharedModule` in other modules of your application. Check the full [documentation](https://angular.io/guide/sharing-ngmodules) for additional information.

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
<nmi-icon>face</nmi-icon>

<!-- Using code point -->
<nmi-icon>&#xe87c;</nmi-icon>

<!-- Adding aria-label -->
<nmi-icon label="Person">face</nmi-icon>

<!-- Setting the size -->
<nmi-icon size="sm">home</nmi-icon>
<nmi-icon size="md">home</nmi-icon>
<nmi-icon size="lg">home</nmi-icon>
<nmi-icon size="xl">home</nmi-icon>

<!-- Setting the color -->
<nmi-icon color="dark">menu</nmi-icon>
<nmi-icon color="dark" [inactive]="true">menu</nmi-icon>
<nmi-icon color="light">menu</nmi-icon>
<nmi-icon color="light" [inactive]="true">menu</nmi-icon>
```

> Check the full [documentation](https://dricholm.github.io/ng-mat-icons/) for details. Additional information on [icons and names](https://material.io/tools/icons/) and [icon names with code points](https://github.com/google/material-design-icons/blob/master/iconfont/codepoints).

## Contribution

### Build

Run `ng build` to build the project.

Run `ng build:lib` to build the library. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `npm run test:lib` to execute the unit tests for the library.
