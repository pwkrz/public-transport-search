import { DataStreamsService } from '../../services/data-streams.service';
import { Suggestion } from '../../models/suggestion.int';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() startLocation: Suggestion | null;
  @Output() changeStartLocation: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeStartLocation(): any {
    this.changeStartLocation.emit(true);
  }

  getStartLocationName(): string {
    const wordsInName = this.startLocation.name.split(' ').length;
    switch (wordsInName) {
      case 0:
        return this.startLocation.formatted_address;
      case 1:
        return this.startLocation.name + ', ' + this.startLocation.formatted_address;
      default:
        return this.startLocation.name;
    }
  }

}
