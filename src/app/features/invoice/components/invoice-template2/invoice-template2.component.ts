import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-template2',
  templateUrl: './invoice-template2.component.html',
  styleUrls: ['./invoice-template2.component.scss']
})
export class InvoiceTemplate2Component {
  @Input() invoice: any;

  constructor() {
    console.log("this.invoice =========", this.invoice);
  }
}
