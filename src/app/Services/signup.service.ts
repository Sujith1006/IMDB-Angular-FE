import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  SignedUp=(user)=>{
    console.log(user)
    return this.http.post('http://localhost:8000/user/signup',user)

  }

}
