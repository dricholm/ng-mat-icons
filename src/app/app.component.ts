import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  setupSnippets: Array<string> = [
    `import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMatIconsModule } from 'ng-mat-icons';

@NgModule({
  imports: [CommonModule, NgMatIconsModule],
  exports: [NgMatIconsModule],
})
export class SharedModule {}`,
    `<!-- Using icon name -->
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
<nmi-icon color="light" [inactive]="true">menu</nmi-icon>`,
  ];

  iconSnippet: Array<string> = [
    '<nmi-icon>face</nmi-icon>',
    '<nmi-icon>&#xe87c;</nmi-icon>',
  ];

  labelSnippet: Array<string> = ['<nmi-icon label="Person">face</nmi-icon>'];

  sizeSnippet: Array<string> = [
    '<nmi-icon size="sm">face</nmi-icon>',
    '<nmi-icon size="18">face</nmi-icon>',
    '<nmi-icon size="md">face</nmi-icon>',
    '<nmi-icon size="24">face</nmi-icon>',
    '<nmi-icon size="lg">face</nmi-icon>',
    '<nmi-icon size="36">face</nmi-icon>',
    '<nmi-icon size="xl">face</nmi-icon>',
    '<nmi-icon size="48">face</nmi-icon>',
  ];

  colorSnippet: Array<string> = [
    '<nmi-icon color="dark">face</nmi-icon>',
    '<nmi-icon color="dark" [inactive]="true">face</nmi-icon>',
    '<nmi-icon color="light">face</nmi-icon>',
    '<nmi-icon color="light" [inactive]="true">face</nmi-icon>',
  ];
}
