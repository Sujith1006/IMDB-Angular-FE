import { Component, OnInit } from '@angular/core';
import {LoginservieService} from '../../Services/loginservie.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email:'',
    password:''
  }
logdetails;
  constructor(private login:LoginservieService , private router:Router) { }

  ngOnInit(): void {
    
  }
  
onSubmit=()=>{
  if(this.user.email===''||this.user.password==="")
  {
    alert("All fields are mandatory")
  }
  else{
    this.login.Loginuser(this.user)
    .subscribe((data)=>{
      this.logdetails=data
      console.log(data)
      if(this.logdetails.errors)
      {
        console.log("Loggedin")
      }
      else{
        localStorage.setItem("userdetails",this.logdetails)
          this.router.navigate(['/imdbhome'],{state: {data: {username:data['username']}}} )
      }
    
    })
  }
}
}
