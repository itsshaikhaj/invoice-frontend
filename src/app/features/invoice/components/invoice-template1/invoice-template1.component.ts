import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-template1',
  templateUrl: './invoice-template1.component.html',
  styleUrls: ['./invoice-template1.component.scss']
})
export class InvoiceTemplate1Component {
  @Input() invoice: any;

  constructor() {
    console.log("this.invoice =========", this.invoice);
  }
}
