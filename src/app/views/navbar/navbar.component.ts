import { DataStreamsService } from './../../services/data-streams.service';
import { Suggestion } from 'src/app/models/suggestion.int';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  startLocation: Suggestion | null;

  constructor(private dataStreamsService: DataStreamsService,
              private router: Router) {
    this.dataStreamsService.getStartLocationStream()
      .subscribe(location => this.startLocation = location);
  }

  ngOnInit(): void {
  }

  changeStartLocation(): any {
    // tslint:disable-next-line:max-line-length
    const shouldChangeStartLocation = confirm('Are you sure you want to change the start location?'); // @TODO Modal - start location change confirmation.
    if (shouldChangeStartLocation) {
      this.dataStreamsService.updateStartLocationStream()
        .then(r => this.router.navigate(['/start-location']));
    }
  }

}
