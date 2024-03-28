import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName : new FormControl({
      value: 'raj',
      disabled : false
    },[Validators.required,Validators.minLength(3)]),
    email : new FormControl('',[Validators.required]),
    gender : new FormControl('',[Validators.required]),
    married : new FormControl('',[Validators.requiredTrue]),
    country : new FormControl('',[Validators.required]),
    address : new FormGroup({
      city : new FormControl('',[Validators.required]),
      state : new FormControl('',[Validators.required]),
      pincode : new FormControl('',[Validators.required]),
    })
  })

  get firstname(){
    return this.contactForm.get('firstName');
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }
}
