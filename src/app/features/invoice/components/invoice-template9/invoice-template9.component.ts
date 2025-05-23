import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-template9',
  templateUrl: './invoice-template9.component.html',
  styleUrls: ['./invoice-template9.component.scss']
})
export class InvoiceTemplate9Component {
  @Input() invoice: any;

  constructor() {
    console.log("this.invoice =========", this.invoice);
  }
}
