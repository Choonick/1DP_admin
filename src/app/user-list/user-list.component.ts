import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:Object={
    name:'',
    money:'',
    reason:'',
    status:'',
    date:'',
    area:'',
    createdAt:''
  }

  public BASE_URL:string='http://13.125.129.181:8000';

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList(){

    return this.http.get(this.BASE_URL+'/penalty').subscribe(Response=>{
      // console.log(Response.list);
      this.users = Response.list;
      console.log(this.users);
    })

    
    


  }





}
