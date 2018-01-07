import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  BASE_URL:string="http://13.125.129.181:8000"
  header:any={
    Accept: 'application/json',
    authorization: 'bearer '+localStorage.getItem('token')
  }

  constructor(public http:HttpClient) { }


  get(query:string){
    this.http.get(this.BASE_URL+query).subscribe(Response=>{
      console.log(Response);
      return Response;
    })
  }

  post(query:string,data:object){
    this.http.post(this.BASE_URL+query,data,{headers:this.header}).subscribe(Response=>{
      console.log(Response);
      location.reload();
    })

  }

  delete(){

  }

  put(){

  }

  


}
