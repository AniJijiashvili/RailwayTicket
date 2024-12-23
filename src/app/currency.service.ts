import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/GEL'; 
  constructor(private http: HttpClient) {}
  // Method to fetch exchange rates from an API and return as an Observable.
  getExchangeRate(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  // Keeping Track of the Current Currency (bellow 2 statement)

  // A BehaviorSubject to hold the current currency, initialized with 'GEL'.
  private currencySource = new BehaviorSubject<string>('GEL');
  // An observable that other components can subscribe to for currency changes.
  currentCurrency = this.currencySource.asObservable();

  // Changes the current currency to a new one. When it does this, it also lets anyone who is listening know about the change.
  // Method to change the current currency by updating currencySource.
  changeCurrency(currency: string) {
    this.currencySource.next(currency);
  }
}
