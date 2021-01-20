import { DataStreamsService } from './../../services/data-streams.service';
import { Suggestion } from 'src/app/models/suggestion.int';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  startLocation: Suggestion | null;

  constructor(private dataStreamsService: DataStreamsService) {
    this.dataStreamsService.getStartLocationStream()
      .subscribe(location => this.startLocation = location);
  }

  ngOnInit(): void {
  }

}
