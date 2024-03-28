import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  // constructor(){}

  // ngOnInit(): void {


  
    

  registername:any=localStorage.getItem('username');
    registerage:any = localStorage.getItem('age');
  registeremail:any=localStorage.getItem('email');
  

}

