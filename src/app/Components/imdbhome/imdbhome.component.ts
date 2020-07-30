import { Component, OnInit } from '@angular/core';
import {ImdbservicesService} from '../../Services/imdbservices.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-imdbhome',
  templateUrl: './imdbhome.component.html',
  styleUrls: ['./imdbhome.component.css']
})
export class ImdbhomeComponent implements OnInit {
  data:''
  movielist:[]
  datalist:[]
 movieSelected:{}
 username:''
  constructor(private imdb:ImdbservicesService,private router:Router) { }

  ngOnInit(): void {
      this.username=history.state.data.username
  }
  textfunc=(e)=>{
    this.data=e;
    if(this.data!='')
    {
    this.imdb.getData(this.data)
    .subscribe((  result )=>{
      // console.log(result)
      this.movielist=result['results']
      console.log(this.movielist)
      
    })
  }
  else{
    this.movielist=[]
  }
   
}
logout=()=>{
  this.router.navigate(['/login'])
}
movieOverveiw=(result)=>{
  this.movieSelected=result
  // console.log(this.movieSelected)
  this.datalist=this.movielist
  this.movielist=[]
  this.data=''
}

}
