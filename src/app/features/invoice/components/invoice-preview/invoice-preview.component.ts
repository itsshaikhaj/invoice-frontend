import { Component, ElementRef, Inject, InjectionToken, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
declare var require: any;
const html2pdf = require('html2pdf.js');



@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.scss']
})
export class InvoicePreviewComponent {
  @ViewChild('invoicePdf', { static: false }) invoicePdf!: ElementRef;

  close() {
    this.dialogRef.close();
  }
  data: any
  constructor(
    @Inject(MAT_DIALOG_DATA) public invoice: any,
    private dialogRef: MatDialogRef<InvoicePreviewComponent>
  ) {
    console.log('this.invoice :', this.invoice);
    if (!this.invoice?.templateId) {
      this.invoice.templateId = 'template1';
    }


  }

  downloadAsPDF(): void {
    const element = this.invoicePdf.nativeElement;
    const opt = {
      margin: [0.2, 0.3, 0.2, 0.3],
      filename: `invoice_${this.invoice.invoiceNumber}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 5, scrollY: 0, windowWidth: 1200 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css'] }
    };

    html2pdf().set(opt).from(element).save();
  }

}


