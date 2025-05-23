import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTemplate4Component } from './invoice-template4.component';

describe('InvoiceTemplate4Component', () => {
  let component: InvoiceTemplate4Component;
  let fixture: ComponentFixture<InvoiceTemplate4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceTemplate4Component]
    });
    fixture = TestBed.createComponent(InvoiceTemplate4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
