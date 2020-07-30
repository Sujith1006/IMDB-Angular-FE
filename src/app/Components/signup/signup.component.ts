import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/Services/signup.service';

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

  constructor(private signup:SignupService) { }

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
                this.signup.SignedUp(this.user)
                .subscribe((data)=>{
                  console.log(data)
                  if(data===true)
                  {
                    alert("Successfully Signedup")
                  }
                  else{
                    alert('Invalid Credentials')
                  }
                })
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
