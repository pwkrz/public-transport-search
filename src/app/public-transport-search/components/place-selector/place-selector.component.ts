import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { distinctUntilChanged, tap, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { Suggestion } from '../../models/suggestion.int';
import { PlaceSelectorService } from './place-selector.service';
import { Observable, of } from 'rxjs';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-place-selector',
  templateUrl: './place-selector.component.html'
})
export class PlaceSelectorComponent implements OnInit {

  @Input() placeholder: string;
  @Output() placeSelected: EventEmitter<Suggestion> = new EventEmitter();

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private placeSelectorService: PlaceSelectorService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => {
        if (term.length <= 2) {
          return of([]);
        } else {
          return this.placeSelectorService.searchQuery(term).pipe(
            tap(() => this.searchFailed = false),
            catchError(() => {
              this.searchFailed = true;
              return of([]);
            }));
        }
      }),
      tap(() => this.searching = false)
    )

  ngOnInit(): void {
  }

  onSuggestionClick(e: NgbTypeaheadSelectItemEvent<Suggestion>): any {
    e.preventDefault();
    this.model = '';
    this.placeSelected.emit(e.item);
  }

}

