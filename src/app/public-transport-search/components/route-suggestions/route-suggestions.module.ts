import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteSuggestionsComponent } from './route-suggestions.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteAccordionComponent } from './route-accordion/route-accordion.component';
import { RouteAccordionHeaderComponent } from './route-accordion/route-accordion-header.component';
import { RouteAccordionContentComponent } from './route-accordion/route-accordion-content.component';


@NgModule({
  declarations: [RouteSuggestionsComponent, RouteAccordionComponent, RouteAccordionHeaderComponent, RouteAccordionContentComponent],
  imports: [
    CommonModule,
    NgbAccordionModule
  ],
  exports: [RouteSuggestionsComponent]
})
export class RouteSuggestionsModule { }
