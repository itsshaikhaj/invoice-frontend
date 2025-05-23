import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiUrl = 'http://localhost:5000/api/invoices';  // API base URL

  constructor(private http: HttpClient) { }


  private readonly customerNames = [
    "Alice Johnson", "Robert Martin", "Sophia Lee", "James Brown", "Mia Clark",
    "Liam Walker", "Isabella Hall", "Ethan Allen", "Amelia Young", "Noah King"
  ];

  private readonly companyNames = [
    "Nimbus Solutions", "Pioneer Labs", "EchoTech", "Vertex Dynamics", "Apex Innovations",
    "Zenith Works", "Quantum Systems", "Nova Enterprises", "Fusion Tech", "Crestline Corp"
  ];

  private readonly companyEmails = [
    "contact@nimbussolutions.com", "info@pioneerlabs.com", "support@echotech.com", "hello@vertexdynamics.com", "sales@apexinnovations.com",
    "info@zenithworks.com", "contact@quantumsystems.com", "support@novaenterprises.com", "info@fusiontech.com", "sales@crestlinecorp.com"
  ];

  private readonly companyPhones = [
    "555-101-2020", "555-303-4040", "555-505-6060", "555-707-8080", "555-909-1010",
    "555-111-2222", "555-333-4444", "555-555-6666", "555-777-8888", "555-999-0000"
  ];

  private readonly addresses = [
    "321 Birch St, Rivertown", "654 Maple Ave, Lakeside", "987 Cedar Rd, Hill Valley", "123 Spruce Blvd, Bay City",
    "456 Pine Ln, Riverdale", "789 Fir Ct, Sunnyvale", "101 Oak Dr, Maplewood", "202 Elm St, Oceanview",
    "303 Walnut Way, Meadowbrook", "404 Aspen Terrace, Clearfield"
  ];

  private readonly itemDescriptions = [
    "Desk Chair", "Office Desk", "Monitor Stand", "LED Lamp", "Filing Cabinet", "Whiteboard", "Projector", "Router", "Coffee Maker", "Bookshelf"
  ];

  getInvoices(): Observable<any[]> {
    const invoices = Array.from({ length: 9 }, (_, i) => this.generateInvoice(i + 1));
    return of(invoices);
  }

  private generateInvoiceNumber(): string {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const random = Math.floor(100 + Math.random() * 900);
    return `INV-${year}${month}-${random}`;
  }

  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomChoice<T>(arr: T[]): T {
    return arr[this.randomInt(0, arr.length - 1)];
  }

  private randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  private generateItem() {
    return {
      description: this.randomChoice(this.itemDescriptions),
      quantity: this.randomInt(1, 20),
      price: this.randomInt(1000, 50000),
    };
  }

  private generateInvoice(templateId: number) {
    const items = Array.from({ length: this.randomInt(4, 5) }, () => this.generateItem());
    const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    const createdAt = this.randomDate(new Date(2024, 0, 1), new Date());
    const dueDate = new Date(createdAt.getTime() + this.randomInt(3, 30) * 24 * 60 * 60 * 1000);

    return {
      id: `inv-${templateId}`,
      customerName: this.randomChoice(this.customerNames),
      customerEmail: `customer${this.randomInt(1000, 9999)}@example.com`,
      customerAddress: this.randomChoice(this.addresses),
      items,
      totalAmount,
      payableAmount: totalAmount,
      status: this.randomChoice(['pending', 'paid']),
      dueDate,
      invoiceNumber: this.generateInvoiceNumber(),
      companyName: this.randomChoice(this.companyNames),
      companyAddress: this.randomChoice(this.addresses),
      companyEmail: this.randomChoice(this.companyEmails),
      companyPhone: this.randomChoice(this.companyPhones),
      templateId: `template${templateId}`,
      createdAt
    };
  }

  // Create an invoice
  createInvoice(invoiceData: any): Observable<any> {
    console.log('invoiceData :', invoiceData);
    return this.http.post(this.apiUrl, invoiceData);
  }

  // Get all invoices (optional: implement if needed in the future)
  // getInvoices(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }

  // Get a specific invoice by ID (optional: implement if needed in the future)
  getInvoiceById(invoiceId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${invoiceId}`);
  }

  updateInvoiceStatus(invoiceId: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${invoiceId}/status`, { status });
  }

  deleteInvoice(invoiceId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${invoiceId}`);
  }

}
