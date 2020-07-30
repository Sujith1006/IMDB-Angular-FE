import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    username:'',
    email:'',
    password:'',
    repassword:''
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit=()=>{
          if(this.user.username===''||this.user.email===''||this.user.password===''||this.user.repassword==='')
          {
            alert("Every Field is Mandatory")
          }
          else{
            if(this.user.password===this.user.repassword)
            {

            }
            else{
              alert("Password Mismatched")
            }
              this.clearuser()

          }
  }
  clearuser=()=>{
    this.user.username=''
    this.user.email=''
    this.user.password=''
    this.user.repassword=''
   }

}
