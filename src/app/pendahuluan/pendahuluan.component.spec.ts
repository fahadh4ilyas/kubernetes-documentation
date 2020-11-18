import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendahuluanComponent } from './pendahuluan.component';

describe('PendahuluanComponent', () => {
  let component: PendahuluanComponent;
  let fixture: ComponentFixture<PendahuluanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendahuluanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendahuluanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
