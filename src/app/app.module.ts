import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlighyDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { BetterInteractiveListenerDirective } from './better-interactive-listener/better-interactive-listener.directive';
import { BetterHighlightPassValueFromDomDirective } from './better-highlight-directive-dom-value/better-highlight-pass-value-from-dom.directive';
import { UnlessStrucuturalDirectiveDirective } from './unless-structural-directive/unless-strucutural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlighyDirective,
    BetterHighlightDirective,
    BetterInteractiveListenerDirective,
    BetterHighlightPassValueFromDomDirective,
    UnlessStrucuturalDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
