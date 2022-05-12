import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtrackComponent } from './furtrack.component';

describe('FurtrackComponent', () => {
  let component: FurtrackComponent;
  let fixture: ComponentFixture<FurtrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurtrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
