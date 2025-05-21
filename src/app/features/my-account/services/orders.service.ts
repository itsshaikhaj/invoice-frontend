import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  private baseUrl = 'http://localhost:8080/api/invoices'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // Fetch invoices for the authenticated user
  getInvoices(): Observable<any> {
    return this.http.get(this.baseUrl);
  }




}
