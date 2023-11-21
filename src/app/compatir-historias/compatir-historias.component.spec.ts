import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatirHistoriasComponent } from './compatir-historias.component';

describe('CompatirHistoriasComponent', () => {
  let component: CompatirHistoriasComponent;
  let fixture: ComponentFixture<CompatirHistoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompatirHistoriasComponent]
    });
    fixture = TestBed.createComponent(CompatirHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
