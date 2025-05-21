// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';
// import { InvoiceService } from './services/invoice.service';
// import { MatDialog } from '@angular/material/dialog';
// import { InvoicePreviewComponent } from './components/invoice-preview/invoice-preview.component';

// @Component({
//   selector: 'app-invoice-form',
//   templateUrl: './invoice.component.html',
//   styleUrls: ['./invoice.component.scss']
// })
// export class InvoiceComponent implements OnInit {
//   @ViewChild('invoiceIframe') iframe!: ElementRef;

//   invoiceForm!: FormGroup;
//   previewUrl!: string;  // Changed to string for compatibility with iframe
//   selectedTemplate: string = 'template1';  // Default template
//   logoBase64: string = '';
//   isSubmitted!: boolean

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private sanitizer: DomSanitizer,
//     private route: ActivatedRoute,
//     private invoiceService: InvoiceService,
//     public dialog: MatDialog
//   ) { }

//   ngOnInit(): void {


//     // Initialize the form
//     this.invoiceForm = this.fb.group({
//       customerName: ['', Validators.required],
//       customerEmail: ['', [Validators.required, Validators.email]],
//       customerAddress: ['', Validators.required],
//       items: this.fb.array([this.createItemGroup()]),
//       dueDate: ['', Validators.required],
//       logo: [''],  // Will store base64 or data URL
//       status: ['pending'],
//     });


//   }

//   openDialog(invoiceData: any) {
//     const dialogRef = this.dialog.open(InvoicePreviewComponent, {
//       width: '800px', // optional
//       height: '800px',
//       data: invoiceData
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     });
//   }


//   get items(): FormArray {
//     return this.invoiceForm.get('items') as FormArray;
//   }

//   createItemGroup(): FormGroup {
//     return this.fb.group({
//       description: ['', Validators.required],
//       quantity: [1, [Validators.required, Validators.min(1)]],
//       price: [0, [Validators.required, Validators.min(0)]],
//     });
//   }

//   addItem(): void {
//     this.items.push(this.createItemGroup());
//   }

//   removeItem(index: number): void {
//     this.items.removeAt(index);
//   }

//   calculateTotal(): number {
//     return this.items.controls.reduce((total, item) => {
//       const qty = item.get('quantity')?.value || 0;
//       const price = item.get('price')?.value || 0;
//       return total + qty * price;
//     }, 0);
//   }

//   submitInvoice(): void {
//     if (this.invoiceForm.invalid) return;

//     const formValue = this.invoiceForm.value;

//     const payload = {
//       ...formValue,
//       totalAmount: this.calculateTotal(),
//       payableAmount: this.calculateTotal(),
//       createdAt: new Date().toISOString(),
//     };

//     // Call the service method to create an invoice
//     this.invoiceService.createInvoice(payload).subscribe({
//       next: (res) => {
//         this.openDialog(res?.invoice); // res is the saved invoice returned from backend

//         alert('Invoice submitted successfully');
//       },
//       error: (err) => {
//         console.error(err);
//         alert('Submission failed');
//       }
//     });
//   }



//   onLogoUpload(event: any): void {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         this.logoBase64 = reader.result as string;
//         this.invoiceForm.get('logo')?.setValue(this.logoBase64);
//       };
//     }
//   }

//   sendInvoiceData() {
//     const iframeEl = this.iframe?.nativeElement as HTMLIFrameElement;

//     // Only send message if iframe is loaded and has contentWindow
//     if (iframeEl && iframeEl.contentWindow) {
//       iframeEl.contentWindow.postMessage(this.invoiceForm.value, '*');
//     }
//   }
// }


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { InvoiceService } from './services/invoice.service';
import { MatDialog } from '@angular/material/dialog';
import { InvoicePreviewComponent } from './components/invoice-preview/invoice-preview.component';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoiceForm!: FormGroup;
  isSubmitted = false;
  generatedInvoiceNumber: string = ''; // show after submit

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerAddress: ['', Validators.required],
      items: this.fb.array([this.createItemGroup()]),
      dueDate: ['', Validators.required],
      status: ['pending'],
      logo: [''],
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyEmail: ['', [Validators.required, Validators.email]],
      companyPhone: ['', Validators.required],
      templateId: ['template1', Validators.required],
    });

    this.invoiceForm.get('templateId')?.setValue(localStorage.getItem('selectedTemplate') || 'template1');
  }

  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  createItemGroup(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  addItem(): void {
    this.items.push(this.createItemGroup());
  }

  removeItem(index: number): void {
    if (this.items.length > 1) this.items.removeAt(index);
  }

  calculateTotal(): number {
    return this.items.controls.reduce((total, item) => {
      const qty = item.get('quantity')?.value || 0;
      const price = item.get('price')?.value || 0;
      return total + qty * price;
    }, 0);
  }

  onLogoUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.invoiceForm.get('logo')?.setValue(reader.result as string);
      };
    }
  }

  submitInvoice(): void {
    this.isSubmitted = true;
    if (this.invoiceForm.invalid) return;

    const formValue = this.invoiceForm.value;

    const payload = {
      ...formValue,
      totalAmount: this.calculateTotal(),
      payableAmount: this.calculateTotal(),
      createdAt: new Date().toISOString(),
    };

    this.invoiceService.createInvoice(payload).subscribe({
      next: (res) => {
        this.generatedInvoiceNumber = res.invoice.invoiceNumber;
        this.openDialog(res.invoice);
        alert('Invoice submitted successfully!');
        this.invoiceForm.reset({
          status: 'pending',
          templateId: 'template1',
          items: [this.createItemGroup().value]
        });
        this.isSubmitted = false;
      },
      error: (err) => {
        console.error(err);
        alert('Invoice submission failed.');
      }
    });
  }

  openDialog(invoiceData: any) {
    this.dialog.open(InvoicePreviewComponent, {
      width: '900px',
      height: 'auto',
      data: invoiceData
    });
  }
}
