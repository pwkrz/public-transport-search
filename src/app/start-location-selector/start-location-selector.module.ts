import { StartLocationRouting } from './start-location.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartLocationSelectorComponent } from './start-location-selector.component';
import { PlaceSelectorComponent } from './place-selector/place-selector.component';



@NgModule({
  declarations: [StartLocationSelectorComponent, PlaceSelectorComponent],
  exports: [StartLocationSelectorComponent],
  imports: [
    CommonModule,
    StartLocationRouting
  ]
})
export class StartLocationSelectorModule { }
