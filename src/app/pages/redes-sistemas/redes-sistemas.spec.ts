import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSistemas } from './redes-sistemas';

describe('RedesSistemas', () => {
  let component: RedesSistemas;
  let fixture: ComponentFixture<RedesSistemas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedesSistemas],
    }).compileComponents();

    fixture = TestBed.createComponent(RedesSistemas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
