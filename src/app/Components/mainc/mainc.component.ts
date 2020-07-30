import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-mainc',
  templateUrl: './mainc.component.html',
  styleUrls: ['./mainc.component.css']
})
export class MaincComponent implements OnInit {
  @Input() data: object
  @Input() movies: []
  moviecurrentid: null
  genre: []
  id: []
  samegenre: any = []
  eleindex:any=[]
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges() {
    this.samegenre = []
    this.eleindex=[]
    this.moviecurrentid = this.data['id']
    this.genre = this.data['genre_ids']
    this.genremovies();
    this.genre = []
    console.log(this.samegenre)

  }
  genremovies = () => {
    // console.log(typeof(this.samegenre))
    this.movies.map((ele, ind) => {
      this.id = ele['genre_ids']
      this.genre.map((id) => {
        if (this.id.indexOf(id) != -1 && ele['id'] != this.moviecurrentid&&this.eleindex.indexOf(ind)===-1) {
          console.log(this.id, id);
          // console.log(typeof(this.samegenre))
          this.eleindex.push(ind)
          this.samegenre.push(ele);
        }
 
      })
    })
  }
  soloselect = (movies) => {
    this.data = movies;
    this.ngOnChanges();
  }
}
