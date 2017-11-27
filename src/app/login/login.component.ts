import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  data: any;
  auth: boolean = false;

  constructor(private loginservice: LoginService, private router: Router) {
  }

  loginHandler() {
    this.loginservice.requestLogin(this.username, this.password).subscribe(result => {
      this.data
        = result
      if (this.data.length == 0) {
        this.auth = true;
      }
      else {
        sessionStorage.setItem('user', JSON.stringify(this.data));
        console.log(JSON.stringify(this.data));
        this.router.navigate(['/user']);

      }
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem("user") != "null") {
      this.router.navigate(['/home']);
    }

  }

}
