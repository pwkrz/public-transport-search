import { Router } from '@angular/router';
import { DataStreamsService } from './services/data-streams.service';
import { DataStorageService } from './services/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Suggestion } from './models/suggestion.int';

@Component({
  selector: 'app-public-transport-search',
  template: `
    <app-navbar [startLocation]="startLocation"
                (changeStartLocation)="changeStartLocation($event)"></app-navbar>
    <div class="container full-height pt-5">
        <router-outlet></router-outlet>
    </div>
  `
})
export class PublicTransportSearchComponent implements OnInit {

  startLocation: Suggestion | null;

  constructor(private dataStorageService: DataStorageService,
              private dataStreamsService: DataStreamsService,
              private router: Router) {
                this.dataStreamsService.getStartLocationStream()
                      .subscribe(location => this.startLocation = location);
              }

  ngOnInit(): void {
    const startLocation = this.dataStorageService.getStartLocation();
    if (!!startLocation) {
      this.dataStreamsService.updateStartLocationStream(startLocation);
    }
  }

  changeStartLocation(shouldChange: boolean): void {
    if (!shouldChange) {
      return;
    }
    // tslint:disable-next-line:max-line-length
    const shouldChangeStartLocation = confirm('Are you sure you want to change the start location?'); // @TODO Modal - start location change confirmation.
    if (shouldChangeStartLocation) {
      this.dataStreamsService.updateStartLocationStream()
        .then(r => this.router.navigate(['/start-location']));
    }
  }

}
