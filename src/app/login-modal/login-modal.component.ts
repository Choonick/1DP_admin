import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {


  user:object={
    email:'',
    pwd:'',
    area:'주안'
  }

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }


  postLogin(){
    this.http.post('http://13.125.129.181:8000/login',this.user).subscribe(Response=>{
      console.log(Response);
      localStorage.setItem('token',Response.token);
      location.reload();
    })
  }
 

}
