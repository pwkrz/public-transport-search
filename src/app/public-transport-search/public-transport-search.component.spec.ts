import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTransportSearchComponent } from './public-transport-search.component';

describe('PublicTransportSearchComponent', () => {
  let component: PublicTransportSearchComponent;
  let fixture: ComponentFixture<PublicTransportSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTransportSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTransportSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
