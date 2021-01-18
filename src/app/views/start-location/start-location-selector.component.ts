import { Suggestion } from 'src/app/models/suggestion.int';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-location-selector',
  template: `
    <app-place-selector
        style="display: block; height: 100vh"
        [placeholder]="'Select start location'"
        [localStorageName]="'start-location'"
        (placeSelected)="startLocationSelected($event)"
    ></app-place-selector>
  `,
})
export class StartLocationSelectorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  startLocationSelected(s: Suggestion): any {
    console.log(s);
    this.router.navigate(['/destination']);
  }

}
