import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  
  addmemberform:any = new FormGroup({
    
    name: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    
    
  })
  // register(){
  //   console.log(this.addmemberform.value)
  // }
  onregister(){
    let username=this.addmemberform.get('name').value;
    let age=this.addmemberform.get('age').value;
    let email=this.addmemberform.get('email').value;
    let password=this.addmemberform.get('password').value;
    localStorage.setItem('username', username)
    localStorage.setItem('age', age)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
    this.addmemberform.reset() 
  }

}
