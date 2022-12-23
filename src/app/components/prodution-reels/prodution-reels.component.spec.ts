import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutionReelsComponent } from './prodution-reels.component';

describe('ProdutionReelsComponent', () => {
  let component: ProdutionReelsComponent;
  let fixture: ComponentFixture<ProdutionReelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutionReelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutionReelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
