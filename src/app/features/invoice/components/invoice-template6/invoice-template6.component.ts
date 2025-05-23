import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-template6',
  templateUrl: './invoice-template6.component.html',
  styleUrls: ['./invoice-template6.component.scss']
})
export class InvoiceTemplate6Component {
  @Input() invoice: any;

  constructor() {
    console.log("this.invoice =========", this.invoice);
  }
}
