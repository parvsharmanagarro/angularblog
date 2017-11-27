import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
blogs:any;
show:boolean=true;
search:boolean=false;
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.show=true;
    this.search=false;
  }
  searchHandler(str:string)
  {console.log(str);
    this.search=true;
    this.userservice.fetchBlogsBySearch(str).subscribe(res=>this.blogs=res);
  }

}
