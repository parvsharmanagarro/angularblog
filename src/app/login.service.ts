import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
let url="http://localhost:3000";
@Injectable()
export class LoginService {

  constructor(private http:HttpClient) {
  }
  requestLogin(uname:string,password:string)
  {console.log(uname);
  console.log(password);
   return this.http.get(`${url}/users?username=${uname}&password=${password}`);
  }

}
