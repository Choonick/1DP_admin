import { Component, OnInit,NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'post-board',
  templateUrl: './post-board.component.html',
  styleUrls: ['./post-board.component.css']
})
export class PostBoardComponent implements OnInit {


  // public BASE_URL:string='http://13.125.129.181:8000';

  post:Object={
    name:'',
    status:'미입금',
    date:'',
    reason:'',
    money:0,
  }

  constructor(public http:HttpClient, public api:ApiService) { 
  }

  postPenalty(){
    return this.api.post('/penalty',this.post)
  //   this.http.post(this.BASE_URL+'/penalty',this.post).subscribe(Response=>{
  //     console.log(Response);
  //   })
  }

  ngOnInit() {
    // this.postPenalty();
  }

}
