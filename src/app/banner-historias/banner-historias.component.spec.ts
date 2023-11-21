import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHistoriasComponent } from './banner-historias.component';

describe('BannerHistoriasComponent', () => {
  let component: BannerHistoriasComponent;
  let fixture: ComponentFixture<BannerHistoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerHistoriasComponent]
    });
    fixture = TestBed.createComponent(BannerHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
