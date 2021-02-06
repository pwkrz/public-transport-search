import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-accordion',
  templateUrl: './route-accordion.component.html'
})
export class RouteAccordionComponent implements OnInit {

  @Input() routeSuggestions: Array<{titleTime: string, titleOverview: string, steps: string[]}>;

  constructor() { }

  ngOnInit(): void {
  }

}
