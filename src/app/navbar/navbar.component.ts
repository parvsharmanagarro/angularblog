import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
log:string;
signed:boolean;
searchstr:string;
homeoruser:boolean;
@Output() onsearch=new EventEmitter<string>();
  constructor(private router:Router) {

  }
  logHandler()
  {
    if(this.log=="Login")
    {
      this.router.navigate(['/login']);
    }
    else {
      sessionStorage.setItem("user", null);
    this.log="Login";
    window.location.href="/home";
    }
  }
  onSearch(search:string)
  {console.log("onSearch"+ search);
  this.onsearch.emit(this.searchstr);
  }

  ngOnInit() {

    if(sessionStorage.getItem("user")=="null")
      this.log="Login";
    else
      this.log="Logout";

  if(sessionStorage.getItem('user')=="null")
    this.signed=false;
  else
    this.signed=true;
  if(window.location.pathname=='/home' || window.location.pathname=='/user')
    this.homeoruser=true;
  }


}
