import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-accordion-content',
  template: `
  <table class="table table-sm table-hover table-borderless">
    <tbody>
        <tr *ngFor="let step of steps">
            <ng-template [ngIf]="step.travel_mode == 'TRANSIT'" [ngIfElse]="walkingBlock">
                <td class="text-right pr-3 w-25">
                    <span class="badge badge-secondary mr-2">{{ step.departure_time }}</span>
                    <span class="badge badge-light">~ {{ step.time }}</span>
                </td>
                <td>
                    <small class="mr-2">{{ step.vehicle }} <b>{{ step.line }}</b> ({{ step.destination }}) -- <b>{{ step.stops }}</b> stops -- to <b>{{ step.arrival_stop }}</b></small>
                </td>
            </ng-template>
            <ng-template #walkingBlock>
                <td class="text-right pr-3 w-25">
                    <span class="badge badge-light">~ {{ step.time }}</span>
                </td>
                <td><small>{{ step.instructions }}</small></td>
            </ng-template>
        </tr>
    </tbody>
  </table>
  `
})
export class RouteAccordionContentComponent {

  @Input() steps;

}
