import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-accordion-content',
  template: `
  <table class="table table-sm table-hover table-bordered table-secondary">
    <tbody>
        <tr *ngFor="let step of steps">
            <ng-template [ngIf]="step.travel_mode == 'TRANSIT'" [ngIfElse]="walkingBlock">
                <td class="text-right pr-3 w-25">
                    <span class="badge badge-warning mr-2">{{ step.departure_time }}</span>
                    <span class="badge badge-secondary">~ {{ step.time }}</span>
                </td>
                <td>
                    <small class="mr-2">{{ step.vehicle }}</small>
                    <span class="badge badge-primary mr-2">{{ step.line }} ({{ step.destination }})</span>
                    <small class="mr-2">{{ step.stops }} stops to</small>
                    <span class="badge badge-primary mr-2">{{ step.arrival_stop }}</span>
                    <span class="badge badge-warning">{{ step.arrival_time }}</span>
                </td>
            </ng-template>
            <ng-template #walkingBlock>
                <td class="text-right pr-3 w-25">
                    <span class="badge badge-secondary">~ {{ step.time }}</span>
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
