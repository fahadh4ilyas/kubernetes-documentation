import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemasangKubernetesComponent } from './memasang-kubernetes.component';

describe('MemasangKubernetesComponent', () => {
  let component: MemasangKubernetesComponent;
  let fixture: ComponentFixture<MemasangKubernetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemasangKubernetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemasangKubernetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
