import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { filter, distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { Suggestion } from 'src/app/models/suggestion.int';
import { PlaceSelectorService } from './service/place-selector.service';

@Component({
  selector: 'app-place-selector',
  templateUrl: './place-selector.component.html',
  styleUrls: ['./place-selector.component.css']
})
export class PlaceSelectorComponent implements OnInit {
  placeSelectionInput = new FormControl('');
  suggestionList: Suggestion[];

  constructor(private placeSelectorService: PlaceSelectorService) {

    this.placeSelectionInput.valueChanges
      .pipe( tap(q => {
        if (q.length <= 2) {
          this.suggestionList = [];
        }
      }))
      .pipe( filter( q => q.length > 2 ) )
      .pipe(distinctUntilChanged())
      // .pipe(debounceTime(400))
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

}

