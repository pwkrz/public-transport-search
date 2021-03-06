import { PlaceSelectorService } from './place-selector.service';
import { PlaceSelectorComponent } from './place-selector.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ PlaceSelectorComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule, // @TODO
    NgbTypeaheadModule,
  ],
  providers: [ PlaceSelectorService ],
  exports: [ PlaceSelectorComponent ]
})
export class PlaceSelectorModule { }
