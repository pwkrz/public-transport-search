import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLocationSelectorComponent } from './start-location-selector.component';

describe('StartLocationSelectorComponent', () => {
  let component: StartLocationSelectorComponent;
  let fixture: ComponentFixture<StartLocationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartLocationSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartLocationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
