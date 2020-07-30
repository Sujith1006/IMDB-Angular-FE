import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImdbservicesService {

  constructor(private http:HttpClient) { }
  getData=(value)=>{
    console.log(value)
    if(!(value==""))
    {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=${value}`)
    }

  }
}
