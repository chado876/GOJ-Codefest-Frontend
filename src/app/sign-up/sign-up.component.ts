import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from '@app/custom-validators';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  // user: { fName: string; lName: string; email: string; password: string } = {
  //   fName: '',
  //   lName: '',
  //   email: '',
  //   password: '',
  // };

  constructor(private formBuilder: FormBuilder, private signUpService: SignUpService
    ) {
      this.createSignUpForm();
    }

  ngOnInit(): void {}

  // createUser() {
  //   console.log('User Creates: ', this.user);
  //   this.user = { fName: '', lName: '', email: '', password: '' };
  // }

  private createSignUpForm() {
    this.signUpForm = this.formBuilder.group(      {
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
        Validators.email,
      ]),
      password: [
        '',
        Validators.compose([
          // 1. Password Field is Required
          Validators.required,
          // 2. check whether the entered password has a number
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          // 3. check whether the entered password has upper case letter
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          // 4. check whether the entered password has a lower-case letter
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          // 5. check whether the entered password has a special character
          // CustomValidators.patternValidator(/[ [!@#$%^&*()_+-=[]{};':"|,.<>/?]/](<mailto:!@#$%^&*()_+-=[]{};':"|,.<>/?]/>), { hasSpecialCharacters: true }),
          CustomValidators.patternValidator(/[$&+,:;=\\\\?@#|/'<>.^*()%!-]/, { hasSpecialCharacters: true }),
          // 6. Has a minimum length of 8 characters
          Validators.minLength(8),
        ]),
      ],
      confirmPassword: ['', [Validators.required]],
    },
    { validator: MustMatch('password', 'confirmPassword') }
  );
  }

  async submit(){
    let user = this.signUpForm.value;
    let firstName: string = user.firstName.trim();
    let lastName: string = user.lastName.trim();

    user = {
      ...user,
      firstName: firstName,
      lastName: lastName
      };
    
    await this.signUpService.signUp(user).toPromise().then((success) =>{
      console.log(success);
    });

  }

  get f() {
    return this.signUpForm.controls;
  }


  
}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}