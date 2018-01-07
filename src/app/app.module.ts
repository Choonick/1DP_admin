import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostBoardComponent } from './post-board/post-board.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from './login-modal/login-modal.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PostBoardComponent,
    MainBoardComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
