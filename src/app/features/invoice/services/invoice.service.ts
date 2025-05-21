import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiUrl = 'http://localhost:5000/api/invoices';  // API base URL

  constructor(private http: HttpClient) { }

  // Create an invoice
  createInvoice(invoiceData: any): Observable<any> {
    console.log('invoiceData :', invoiceData);
    return this.http.post(this.apiUrl, invoiceData);
  }

  // Get all invoices (optional: implement if needed in the future)
  getInvoices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Get a specific invoice by ID (optional: implement if needed in the future)
  getInvoiceById(invoiceId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${invoiceId}`);
  }
}
