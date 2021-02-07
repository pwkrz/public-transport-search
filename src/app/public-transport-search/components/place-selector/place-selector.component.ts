import { FormControl } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { filter, distinctUntilChanged, tap, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { Suggestion } from '../../models/suggestion.int';
import { PlaceSelectorService } from '../../services/place-selector.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-place-selector',
  templateUrl: './place-selector.component.html'
})
export class PlaceSelectorComponent implements OnInit {
  // placeSelectionInput = new FormControl('');
  // suggestionList: Suggestion[];
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
        console.log('tu', this);
        return this.placeSelectorService.searchQuery(term).pipe(
          tap(resp => console.log('switch', resp)),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }));
      }),
      tap(() => this.searching = false)
    )

  

    // this.placeSelectionInput.valueChanges
    //   .pipe( tap(q => {
    //     if (q.length <= 2) {
    //       this.suggestionList = [];
    //     }
    //   }))
    //   .pipe( filter( q => q.length > 2 ) )
    //   .pipe(distinctUntilChanged())
    //   .subscribe( q => {
    //     this.placeSelectorService.search(q);
    //   });

    // this.placeSelectorService.getPlaceSuggestionsStream()
    //   .subscribe( s => {
    //     this.suggestionList = s;
    //   });
  // }

  ngOnInit(): void {
  }

  onSuggestionClick(s: Suggestion): any {
    console.log('onSuggestionClick', s);
    // this.suggestionList = [];
    // this.placeSelected.emit(s);
  }

}

