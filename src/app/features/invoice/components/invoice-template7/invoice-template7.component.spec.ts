import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTemplate7Component } from './invoice-template7.component';

describe('InvoiceTemplate7Component', () => {
  let component: InvoiceTemplate7Component;
  let fixture: ComponentFixture<InvoiceTemplate7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceTemplate7Component]
    });
    fixture = TestBed.createComponent(InvoiceTemplate7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
