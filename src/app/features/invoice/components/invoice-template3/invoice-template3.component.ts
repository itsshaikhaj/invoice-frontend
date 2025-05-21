import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-template3',
  templateUrl: './invoice-template3.component.html',
  styleUrls: ['./invoice-template3.component.scss']
})
export class InvoiceTemplate3Component {
  @Input() invoice: any;

  constructor() {
    console.log("this.invoice =========", this.invoice);
  }
}
