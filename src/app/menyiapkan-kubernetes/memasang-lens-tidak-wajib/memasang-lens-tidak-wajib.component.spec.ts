import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemasangLensTidakWajibComponent } from './memasang-lens-tidak-wajib.component';

describe('MemasangLensTidakWajibComponent', () => {
  let component: MemasangLensTidakWajibComponent;
  let fixture: ComponentFixture<MemasangLensTidakWajibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemasangLensTidakWajibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemasangLensTidakWajibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
