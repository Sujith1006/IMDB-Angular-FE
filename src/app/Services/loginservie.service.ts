import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LoginservieService {

  constructor(private http:HttpClient) { }
  Loginuser=(user)=>{
    return this.http.post('http://localhost:8000/user/login',user)
  }
}
