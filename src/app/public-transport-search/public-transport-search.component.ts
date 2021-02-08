import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { Router } from '@angular/router';
import { DataStreamsService } from './services/data-streams.service';
import { DataStorageService } from './services/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Suggestion } from './models/suggestion.int';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
              private router: Router,
              private modalService: NgbModal) {
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
    const modalRef = this.modalService.open(ConfirmationModalComponent, {centered: true});
    modalRef.componentInstance.confirmationQuery = 'Are you sure you want to change the start location?';
    modalRef.result
            .then(confirmed => {
              if (confirmed) {
                this.dataStreamsService.updateStartLocationStream()
                  .then(() => this.router.navigate(['/start-location']));
              }
            });
  }

}
