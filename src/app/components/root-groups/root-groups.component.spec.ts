import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootGroupsComponent } from './root-groups.component';

describe('RootGroupsComponent', () => {
  let component: RootGroupsComponent;
  let fixture: ComponentFixture<RootGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
