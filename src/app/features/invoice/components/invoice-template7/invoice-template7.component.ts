import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-template7',
  templateUrl: './invoice-template7.component.html',
  styleUrls: ['./invoice-template7.component.scss']
})
export class InvoiceTemplate7Component {
  @Input() invoice: any;

  constructor() {
    console.log("this.invoice =========", this.invoice);
  }
}
