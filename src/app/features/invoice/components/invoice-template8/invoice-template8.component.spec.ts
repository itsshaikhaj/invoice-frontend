import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTemplate8Component } from './invoice-template8.component';

describe('InvoiceTemplate8Component', () => {
  let component: InvoiceTemplate8Component;
  let fixture: ComponentFixture<InvoiceTemplate8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceTemplate8Component]
    });
    fixture = TestBed.createComponent(InvoiceTemplate8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
