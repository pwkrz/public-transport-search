import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-accordion-header',
  template: `
    <span class="panel-arrow mr-3">&#8674;</span>
    <span   *ngFor="let o of overview"
            class="btn btn-outline-secondary mr-2">{{ o.vehicle }}
            <span class="badge badge-primary badge-pill">{{ o.line }}</span>
    </span>
    <small class="align-top">{{ time }}</small>
  `
})
export class RouteAccordionHeaderComponent {

  @Input() overview;
  @Input() time;

}
