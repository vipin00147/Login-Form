import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-form';
  email : string;
  password : string;

  getdata(email,password){
    this.email=email.value;
    this.password=password.value;
    if(this.email.length==0 && this.password.length==0){
      alert("Both fields are Empty");
    }
    else if(this.email.length==0){
      alert("Warning Email Field Empty");
    }
    else if(this.password.length==0){
      alert("Warning Password Field Empty");
    }
  }
  
}