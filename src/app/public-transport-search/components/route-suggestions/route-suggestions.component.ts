import { RouteSuggestionsService } from './route-suggestions.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-route-suggestions',
  templateUrl: './route-suggestions.component.html',
  styleUrls: ['./route-suggestions.component.css']
})
export class RouteSuggestionsComponent implements OnInit {

  @Input() startID: string;
  @Input() endID: string;
  @Input() destinationName: string;
  routeSuggestions: Array<{time: string, overview: string, steps: string[]}>;

  constructor(private routeSuggestionService: RouteSuggestionsService,
              public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.routeSuggestionService.getRouteSuggestions({
        startID: this.startID,
        endID: this.endID
      })
        .then(response => {
          console.log(response);
          this.routeSuggestions = response;
        });
  }

}
