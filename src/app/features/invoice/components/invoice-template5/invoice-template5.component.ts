import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-template5',
  templateUrl: './invoice-template5.component.html',
  styleUrls: ['./invoice-template5.component.scss']
})
export class InvoiceTemplate5Component {
  @Input() invoice: any;

  constructor() {
    console.log("this.invoice =========", this.invoice);
  }
}
