// invoice-list.component.ts
import { Component, OnInit } from '@angular/core';
import { InvoicePreviewComponent } from 'src/app/features/invoice/components/invoice-preview/invoice-preview.component';
import { InvoiceService } from 'src/app/features/invoice/services/invoice.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  invoices: any[] = []; // Array to store invoices
  errorMessage: string | null = null; // To handle errors

  constructor(private invoiceService: InvoiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadInvoices(); // Load invoices when the component initializes
  }

  // Load all invoices
  loadInvoices(): void {
    this.invoiceService.getInvoices().subscribe({
      next: (data: any[]) => {
        this.invoices = data; // Assign fetched invoices
        console.log('Invoices loaded:', this.invoices);
      },
      error: (error) => {
        this.errorMessage = 'Failed to load invoices. Please try again later.';
        console.error('Error fetching invoices:', error);
      }
    });
  }

  // Preview an invoice (e.g., show details in a modal or navigate to a details page)
  previewInvoice(invoice: any): void {
    this.invoiceService.getInvoiceById(invoice._id).subscribe({
      next: (data: any) => {
        console.log('Invoice details:', data);
        // Implement preview logic (e.g., open a modal or navigate to a details page)
        // Example: You could store the data in a component property and show it in a modal
        alert(`Invoice Details:\nNumber: ${data.invoiceNumber}\nCustomer: ${data.customerName}\nTotal: ₹${data.totalAmount}`);
        // Alternatively, navigate to a details page:
        // this.router.navigate(['/invoice', invoice._id]);
      },
      error: (error) => {
        this.errorMessage = `Failed to load invoice ${invoice.invoiceNumber}.`;
        console.error('Error fetching invoice:', error);
      }
    });
  }

  // Download an invoice as a PDF
  downloadInvoice(invoice: any): void {
    // this.invoiceService.downloadInvoice(invoice._id).subscribe({
    //   next: (response: Blob) => {
    //     const blob = new Blob([response], { type: 'application/pdf' });
    //     saveAs(blob, `invoice_${invoice.invoiceNumber}.pdf`);
    //   },
    //   error: (error) => {
    //     this.errorMessage = `Failed to download invoice ${invoice.invoiceNumber}.`;
    //     console.error('Error downloading invoice:', error);
    //   }
    // });
  }

  // Delete an invoice
  deleteInvoice(invoiceId: string): void {
    // if (confirm('Are you sure you want to delete this invoice?')) {
    //   this.invoiceService.deleteInvoice(invoiceId).subscribe({
    //     next: () => {
    //       this.invoices = this.invoices.filter((invoice) => invoice._id !== invoiceId);
    //       console.log('Invoice deleted:', invoiceId);
    //     },
    //     error: (error) => {
    //       this.errorMessage = 'Failed to delete invoice.';
    //       console.error('Error deleting invoice:', error);
    //     }
    //   });
    // }
  }

  openDialog(invoiceData: any) {
    console.log('invoiceData :', invoiceData);
    const dialogRef = this.dialog.open(InvoicePreviewComponent, {
      width: '800px', // optional
      height: '800px',
      data: invoiceData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}