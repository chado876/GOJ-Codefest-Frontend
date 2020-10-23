import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logger } from '@app/@core/logger.service';
import { Observable, of } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';

const log = new Logger('AuthenticationService');

const routes={
  login : ()=> '/user/login'
};
export interface LoginContext {
  email: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient,private credentialsService: CredentialsService,
    ) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  async login(context: LoginContext){
    // Replace by proper authentication call
    const httpOtions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    
    const data = {
      email: context.email,
      password: context.password,
    };
    return this.http
    .post<any>(routes.login(), data, httpOtions)
    .toPromise()
    .then((results) => {
      return this.setCredentials(results, context);
    })
    .catch((error: HttpErrorResponse) => {
      // console.error(error);
      log.info('An Error occured');
      return error;
    });
  }

  private setCredentials(results: any, context: any): any {
    this.credentialsService.setCredentials(results, context.remember);
    return this.credentialsService.credentials;
    /**
     * DEPRECATED
     */
    // let jwt = results.access_token;

    // let jwtData = jwt.split('.')[1];
    // let decodedJwtJsonData = window.atob(jwtData);
    // let decodedJwtData = JSON.parse(decodedJwtJsonData);

    // log.info('>> setCredentials');
    // log.info(decodedJwtData); //TO BE REMOVED
    // log.info(decodedJwtJsonData);

    // this.data = {
    //   username: context.username,
    //   firstName: decodedJwtData.family_name,
    //   lastName: decodedJwtData.given_name,
    //   token: results.access_token,
    //   refreshToken: results.refresh_token,
    //   userId: results.userId,
    //   roles: decodedJwtData.resource_access['mgsp-microservice'].roles,
    // };
    // this.credentialsService.setCredentials(this.data, context.remember);

    // return this.data;
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
