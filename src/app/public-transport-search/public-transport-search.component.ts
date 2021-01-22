import { DataStreamsService } from './services/data-streams.service';
import { DataStorageService } from './services/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-transport-search',
  templateUrl: './public-transport-search.component.html',
  styleUrls: ['./public-transport-search.component.css']
})
export class PublicTransportSearchComponent implements OnInit {

  title: 'Public Transport Search';

  constructor(private dataStorageService: DataStorageService,
              private dataStreamsService: DataStreamsService) { }

  ngOnInit(): void {
    const startLocation = this.dataStorageService.getStartLocation();
    if (!!startLocation) {
      this.dataStreamsService.updateStartLocationStream(startLocation);
    }
  }

}
