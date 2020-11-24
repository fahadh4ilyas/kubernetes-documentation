import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLinkComponent } from './bottom-link.component';

describe('BottomLinkComponent', () => {
  let component: BottomLinkComponent;
  let fixture: ComponentFixture<BottomLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
