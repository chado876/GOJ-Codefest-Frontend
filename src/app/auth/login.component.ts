import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { AuthenticationService } from './authentication.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  async login() {
    this.isLoading = true;

    let response = await this.authenticationService.login(this.loginForm.value);

    log.info('login >>');
    log.info(response);
    if ([401, 404].indexOf(response.status) !== -1) {
      // if (response.status == 404) {
      log.debug(`Login error: ${response.error.message}`);
      this.error = response.error.message;
      this.isLoading = false;
      return;
    } //TODO can be removed

    if (response.status && response.status == 500 && response.message + ''.includes('Connection timed out')) {
      this.error = 'Error connecting to server';
      this.isLoading = false;
      return;
    } //TODO Refactor

    if (response.status && response.status !== 200 && response.status != 400) {
      log.debug(`Login error: ${response.error.message}`);
      this.error = response.error.message;
      this.isLoading = false;
      return;
    }

    if (response.status && response.status == 400) {
      console.log(response.error.message);
      if (response.error.message === 'Account is not fully set up') {
        // this.router.navigate(['/reset-admin-password'], { replaceUrl: true });
      } else {
        this.error = response.error.message;
        this.isLoading = false;
        return;
      }
    }

    if (response.user.EMAIL) {
      this.loginForm.markAsPristine();
      this.isLoading = false;
      // if (response.userData.type === 'ADMIN') {
      //   this.router.navigate(['/admin'], { replaceUrl: true });
      // } else {
        this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
      // }
    } else {
      console.log(response.user.EMAIL);
      log.debug(`Login error: ${response.error.message}`);
      this.error = response.error.message;
      this.isLoading = false;
    }
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
