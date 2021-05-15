import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlighyDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { BetterInteractiveListenerDirective } from './better-interactive-listener/better-interactive-listener.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlighyDirective,
    BetterHighlightDirective,
    BetterInteractiveListenerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
