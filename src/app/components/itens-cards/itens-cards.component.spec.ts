import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCardsComponent } from './itens-cards.component';

describe('ItensCardsComponent', () => {
  let component: ItensCardsComponent;
  let fixture: ComponentFixture<ItensCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
