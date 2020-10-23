import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredentialsService } from '@app/auth';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

const apiPaths = {
  // upload: (file: FormData,passcode: string, token: string, applNbr: string) => `api/v1/referee/document/upload?file=${file}&passcode=${passcode}&token=${token}&applNbr=${applNbr}`
  register: () => `/user/register-admin`,
};

export interface UserContext {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  @Injectable({
    providedIn: 'root',
  })
  export class SignUpService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  signUp(context: UserContext) {
    const object = {
        firstName: context.firstName,
        lastName: context.lastName,
        email: context.email,
        password: context.password
      };
    return this.http.post<any>(apiPaths.register(), object, this.httpOptions);
  }
}
