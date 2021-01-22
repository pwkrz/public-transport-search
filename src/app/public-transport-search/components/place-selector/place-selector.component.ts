import { FormControl } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { filter, distinctUntilChanged, tap } from 'rxjs/operators';
import { Suggestion } from '../../models/suggestion.int';
import { PlaceSelectorService } from '../../services/place-selector.service';

@Component({
  selector: 'app-place-selector',
  templateUrl: './place-selector.component.html',
  styleUrls: ['./place-selector.component.css']
})
export class PlaceSelectorComponent implements OnInit {
  placeSelectionInput = new FormControl('');
  suggestionList: Suggestion[];
  @Input() placeholder: string;
  @Input() localStorageName: string;
  @Output() placeSelected: EventEmitter<Suggestion> = new EventEmitter();

  constructor(private placeSelectorService: PlaceSelectorService) {

    this.placeSelectionInput.valueChanges
      .pipe( tap(q => {
        if (q.length <= 2) {
          this.suggestionList = [];
        }
      }))
      .pipe( filter( q => q.length > 2 ) )
      .pipe(distinctUntilChanged())
      .subscribe( q => {
        this.placeSelectorService.search(q);
      });

    this.placeSelectorService.getPlaceSuggestionsStream()
      .subscribe( s => {
        console.log(s);
        this.suggestionList = s;
      });
  }

  ngOnInit(): void {
  }

  onSuggestionClick(s: Suggestion): any {
    this.placeSelected.emit(s);
  }

}
