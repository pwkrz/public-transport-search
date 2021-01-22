import { PlaceSelectorService } from './../../services/place-selector.service';
import { PlaceSelectorComponent } from './place-selector.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ PlaceSelectorComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbDropdownModule
  ],
  providers: [ PlaceSelectorService ],
  exports: [ PlaceSelectorComponent ]
})
export class PlaceSelectorModule { }
