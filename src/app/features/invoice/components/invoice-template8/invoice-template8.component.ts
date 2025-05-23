import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-template8',
  templateUrl: './invoice-template8.component.html',
  styleUrls: ['./invoice-template8.component.scss']
})
export class InvoiceTemplate8Component {
  @Input() invoice: any;

  constructor() {
    console.log("this.invoice =========", this.invoice);
  }
}
