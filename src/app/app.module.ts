import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMatIconsModule } from 'ng-mat-icons';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, NgMatIconsModule],
  providers: [],
})
export class AppModule {}
