import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStreamsService } from '../../services/data-streams.service';

@Component({
  selector: 'app-destination-selector',
  template: `
    <h1 class="h3 mt-5 pt-5">Suggested routes</h1>
  `,
  styles: [
  ]
})
export class RoutesComponent implements OnDestroy {

  constructor(private dataStreamsService: DataStreamsService) {
    this.dataStreamsService.getDestinationStream()
        .subscribe(dest => console.log('routes', dest));

    this.dataStreamsService.getStartLocationStream()
        .subscribe(start => console.log('start', start));
  }

  ngOnDestroy(): void {
    // this.dataStreamsService.updateDestination();
  }

}
