import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTemplate9Component } from './invoice-template9.component';

describe('InvoiceTemplate9Component', () => {
  let component: InvoiceTemplate9Component;
  let fixture: ComponentFixture<InvoiceTemplate9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceTemplate9Component]
    });
    fixture = TestBed.createComponent(InvoiceTemplate9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
