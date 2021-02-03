import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion.int';
import { DataStreamsService } from '../../services/data-streams.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouteSuggestionsComponent } from '../../components/route-suggestions/route-suggestions.component';

@Component({
  selector: 'app-destination-selector',
  templateUrl: './destination-selector.component.html',
  styleUrls: ['./destination-selector.component.css']
})
export class DestinationSelectorComponent {

  startLocation: Suggestion;
  destination: Suggestion | any;

  constructor(private dataStreamsService: DataStreamsService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal) {
    this.dataStreamsService.getStartLocationStream()
                    .subscribe(start => this.startLocation = start);
    this.activatedRoute.queryParams
                    .subscribe(qParams => {
      this.modalService.dismissAll();
      if (qParams.place_id && qParams.name) {
        this.destination = qParams;
        const modalRef = this.modalService.open(RouteSuggestionsComponent, {size: 'lg', scrollable: true});
        modalRef.componentInstance.startID = this.startLocation.place_id;
        modalRef.componentInstance.endID = this.destination.place_id;
        modalRef.componentInstance.destinationName = this.destination.name;
      } else {
        this.destination = null;
      }
    });
  }

  onDestinationSelection(s: Suggestion): void {
    this.dataStreamsService.updateDestination(s)
        .then(() => {
          const place_id = s.place_id;
          const name = s.description.replace(', Polska', '') || 'unspecified';
          this.router.navigate([], {queryParams: {name, place_id}});
        });
  }

}
