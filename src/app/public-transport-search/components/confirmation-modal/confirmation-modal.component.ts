import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  template: `
    <div class="card">
      <div class="card-header text-center">
        Confirmation required
      </div>
      <div class="card-body text-center">
        <p class="card-text mb-4">{{ confirmationQuery }}</p>
        <a class="btn btn-outline-secondary mr-2"
           (click)="activeModal.dismiss()">Cancel</a>
        <a class="btn btn-primary ml-2"
           (click)="activeModal.close(true)">OK</a>
      </div>
    </div>
  `
})
export class ConfirmationModalComponent implements OnInit {

  @Input() confirmationQuery: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
