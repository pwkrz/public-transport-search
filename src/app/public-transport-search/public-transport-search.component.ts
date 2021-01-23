import { DataStreamsService } from './services/data-streams.service';
import { DataStorageService } from './services/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-transport-search',
  template: `
    <app-navbar></app-navbar>
    <div class="container full-height" style="flex: 1 1 auto;">
        <router-outlet></router-outlet>
    </div>
  `
})
export class PublicTransportSearchComponent implements OnInit {

  title: 'Public Transport Search';

  constructor(private dataStorageService: DataStorageService,
              private dataStreamsService: DataStreamsService) { }

  ngOnInit(): void {
    const startLocation = this.dataStorageService.getStartLocation();
    if (!!startLocation) {
      this.dataStreamsService.updateStartLocationStream(startLocation);
    }
  }

}
