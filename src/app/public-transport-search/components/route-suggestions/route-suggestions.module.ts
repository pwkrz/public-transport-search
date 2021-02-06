import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteSuggestionsComponent } from './route-suggestions.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteAccordionComponent } from './route-accordion/route-accordion.component';


@NgModule({
  declarations: [RouteSuggestionsComponent, RouteAccordionComponent],
  imports: [
    CommonModule,
    NgbAccordionModule
  ],
  exports: [RouteSuggestionsComponent]
})
export class RouteSuggestionsModule { }
