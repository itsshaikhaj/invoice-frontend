// invoice-list.component.ts
import { Component, OnInit } from '@angular/core';
import { InvoicePreviewComponent } from 'src/app/features/invoice/components/invoice-preview/invoice-preview.component';
import { InvoiceService } from 'src/app/features/invoice/services/invoice.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  invoices: any[] = []; // Array to store invoices
  errorMessage: string | null = null; // To handle errors

  constructor(private invoiceService: InvoiceService, public dialog: MatDialog, private toastr: ToastrService) { }

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



  // Delete an invoice
  deleteInvoice(invoiceId: string): void {
    if (confirm('Are you sure you want to delete this invoice?')) {
      this.invoiceService.deleteInvoice(invoiceId).subscribe({
        next: () => {
          this.invoices = this.invoices.filter((invoice) => invoice._id !== invoiceId);
          this.toastr.success('Invoice deleted successfully!');
          console.log('Invoice deleted:', invoiceId);
        },
        error: (error) => {
          this.errorMessage = 'Failed to delete invoice.';
          console.error('Error deleting invoice:', error);
          this.toastr.error('Failed to delete invoice.');
        }
      });
    }
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

  updateInvoiceStatus(invoice: any): void {
    this.invoiceService.updateInvoiceStatus(invoice._id, invoice.status).subscribe({
      next: (updated: any) => {
        this.toastr.success('Status updated successfully!');
      },
      error: (error) => {
        this.errorMessage = `Failed to update status for invoice ${invoice.invoiceNumber}`;
        console.error('Error updating invoice status:', error);
        this.toastr.error('Failed to update status for invoice.');
      }
    });
  }




}