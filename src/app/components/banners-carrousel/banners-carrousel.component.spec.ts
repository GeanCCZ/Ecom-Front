import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersCarrouselComponent } from './banners-carrousel.component';

describe('BannersCarrouselComponent', () => {
  let component: BannersCarrouselComponent;
  let fixture: ComponentFixture<BannersCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannersCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
