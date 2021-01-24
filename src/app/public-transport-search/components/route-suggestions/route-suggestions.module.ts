import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteSuggestionsComponent } from './route-suggestions.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [RouteSuggestionsComponent],
  imports: [
    CommonModule,
    NgbAccordionModule
  ],
  exports: [RouteSuggestionsComponent]
})
export class RouteSuggestionsModule { }
