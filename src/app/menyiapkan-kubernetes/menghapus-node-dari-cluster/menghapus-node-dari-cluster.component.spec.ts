import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenghapusNodeDariClusterComponent } from './menghapus-node-dari-cluster.component';

describe('MenghapusNodeDariClusterComponent', () => {
  let component: MenghapusNodeDariClusterComponent;
  let fixture: ComponentFixture<MenghapusNodeDariClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenghapusNodeDariClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenghapusNodeDariClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
