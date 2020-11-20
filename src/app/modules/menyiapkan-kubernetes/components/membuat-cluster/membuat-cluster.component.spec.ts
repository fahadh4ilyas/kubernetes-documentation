import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembuatClusterComponent } from './membuat-cluster.component';

describe('MembuatClusterComponent', () => {
  let component: MembuatClusterComponent;
  let fixture: ComponentFixture<MembuatClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembuatClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembuatClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
