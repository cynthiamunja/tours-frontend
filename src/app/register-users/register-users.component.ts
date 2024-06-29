
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register-users',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {
  
  unallowedNames = ["test", 'Hacker', 'john Doe', 'Jane doe'];
  registerUserForm!: FormGroup;
  //categoriesForm!: FormGroup;

  constructor(private fb:FormBuilder, private authentication:AuthenticationService){}

  ngOnInit(): void {
    this.registerUserForm =this.fb.group({
      register: this.fb.group({
        UserName: this.fb.control(null, Validators.required),
        Email: this.fb.control(null, [Validators.email,Validators.required]),
        UserPassword: this.fb.control(null, Validators.required),
      })
    });
   
  }

  onRegisterUser() {
    if (this.registerUserForm.valid) {
      console.log(this.registerUserForm.value);
  
      this.authentication.registerUser(this.registerUserForm.value).subscribe(
        res => {
          console.log(res.message);
        },
        err => {
          console.error('Error occurred:', err);
        }
      );
      
      this.registerUserForm.reset();
    } else {
      console.log('register form is invalid');
      this.registerUserForm.markAllAsTouched();  
    }
  }
  
 

  prepopulate() {
    this.registerUserForm.patchValue({
      Products: {
        username: 'Just name',
      }
    });
  }

  addControl() {
    const control = new FormControl(null, Validators.required);
    (this.registerUserForm.get('skills') as FormArray).push(control);
  }

  getControl() {
    return (this.registerUserForm.get('skills') as FormArray).controls;
  }

  delete(i: number) {
    (this.registerUserForm.get('skills') as FormArray).removeAt(i);
  }

  unallowedNamesasyncValidator(control: FormControl) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        if (this.unallowedNames.includes(control.value)) {
          resolve({ unallowedName: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}