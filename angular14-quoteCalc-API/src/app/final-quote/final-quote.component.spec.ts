import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalQuoteComponent } from './final-quote.component';

describe('FinalQuoteComponent', () => {
  let component: FinalQuoteComponent;
  let fixture: ComponentFixture<FinalQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
