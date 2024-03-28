import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router){}

  loginform:FormGroup|any

  ngOnInit(): void {
    this.loginform = new FormGroup({

    
      email: new FormControl('', [Validators.required, Validators.email]),
     
      password: new FormControl('', [Validators.required]),
      
  
    })
  }
  login(){
    console.log(this.loginform.value)
  }
  
  onlogin(){
    let email=this.loginform.get('email').value;
    let password=this.loginform.get('password').value;
    sessionStorage.setItem('email',email)
    sessionStorage.setItem('password',password)

    let registeremail=localStorage.getItem('email')
    let registerpassword = localStorage.getItem('password')

  
    
    if(registeremail === email && registerpassword === password){
      localStorage.setItem('isloggedin','true')
      alert('User login sucessfully');
      this.router.navigate(['profile'])
    } else{
      localStorage.setItem('isloggedin','false')
      alert('wrong credentials')
    }
    this.loginform.reset()
  }
}


 



