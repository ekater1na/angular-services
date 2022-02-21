import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalizePipe} from './pipes/capitalize.pipe';

@NgModule({
  exports: [CommonModule, CapitalizePipe],
  imports: [CommonModule],
  declarations: [
    CapitalizePipe
  ],
  providers: []
})
export class SharedModule {
}
