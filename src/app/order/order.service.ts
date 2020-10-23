import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

const apiPaths = {
  // upload: (file: FormData,passcode: string, token: string, applNbr: string) => `api/v1/referee/document/upload?file=${file}&passcode=${passcode}&token=${token}&applNbr=${applNbr}`
  orderItem: () => `/desired-item`,
};

export interface OrderContext {
  itemLink: string;
  itemCategory: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`,

    }),
  };

  orderItem(context: OrderContext) {
    const object = {
      itemLink: context.itemLink,
      itemCategory: context.itemCategory
    };
    return this.http.post<any>(apiPaths.orderItem(), object, this.httpOptions);
  }
}
