import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

const apiPaths = {
  // upload: (file: FormData,passcode: string, token: string, applNbr: string) => `api/v1/referee/document/upload?file=${file}&passcode=${passcode}&token=${token}&applNbr=${applNbr}`
  getAllItems: () => `/desired-item`,
 uploadInvoice: () => '/admin/upload-invoice'

};

// export interface AdminContext {
//   itemLink: string;
// }

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`,
    }),
  };

  httpOpts = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`,
    }),
  };

  getAllItems() {
    return this.http.get<any>(apiPaths.getAllItems(), this.httpOptions);
  }

  async uploadInvoice(formData: FormData) {
    return this.http
      .patch<any>(apiPaths.uploadInvoice(), formData,this.httpOpts)
      .toPromise()
      .then((results) => {
        return results;
      })
      .catch((error) => {
        // log.info('Error sending verification email');
        // log.debug(error);
        return error;
      });
  }
}
