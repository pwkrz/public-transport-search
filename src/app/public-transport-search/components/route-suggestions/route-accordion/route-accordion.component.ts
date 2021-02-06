import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-accordion',
  template: `
    <ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0" closeOthers="true">
      <ngb-panel  *ngFor="let rSuggestion of routeSuggestions; index as i"
                  [id]="'ngb-panel-' + i"
                  [cardClass]="acc.isExpanded('ngb-panel-' + i) && 'panel-expanded'">
          <ng-template ngbPanelHeader>
              <app-route-accordion-header (click)="acc.toggle('ngb-panel-' + i)"
                                          [overview]="rSuggestion.titleOverview"
                                          [time]="rSuggestion.titleTime"
                                          class="d-inline-block w-100 h-100"
              ></app-route-accordion-header>
          </ng-template>
          <ng-template ngbPanelContent>
              <app-route-accordion-content [steps]="rSuggestion.steps"></app-route-accordion-content>
          </ng-template>
      </ngb-panel>
    </ngb-accordion>
  `
})
export class RouteAccordionComponent {

  @Input() routeSuggestions: Array<{titleTime: string, titleOverview: string, steps: string[]}>;

}
