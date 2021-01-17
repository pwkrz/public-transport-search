import { Suggestion } from 'src/app/models/suggestion.int';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-location-selector',
  templateUrl: './start-location-selector.component.html',
  styleUrls: ['./start-location-selector.component.css']
})
export class StartLocationSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  startLocationSelected(s: Suggestion): any {
    console.log(s);
  }

}
