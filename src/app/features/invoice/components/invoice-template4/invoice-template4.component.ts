import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-template4',
  templateUrl: './invoice-template4.component.html',
  styleUrls: ['./invoice-template4.component.scss']
})
export class InvoiceTemplate4Component {
  @Input() invoice: any;

  constructor() {
    console.log("this.invoice =========", this.invoice);
  }
}
