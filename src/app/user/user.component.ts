import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {removeSuffix} from "@angular/language-service/src/utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name:string;
user:any;
showblogs:boolean=false;
blogs:any;
showAll:boolean=true;
showform:boolean=false;
blog:any;
searchstr:string;
searchblogs:any;
searched:boolean=false;
show:boolean=true;

  constructor(private userservice:UserService,private router:Router) {

  }
  showBlogs()
  {
    this.showblogs=!this.showblogs;
    this.showAll=!this.showAll;
    if(this.showblogs)
    this.fetchBlogsByUser();
  }
  updateBlog(blog:any)
  {this.blog=blog;
    this.showform=true;
  }
  deleteBlog(id:number)
  {//console.log(id);
    this.userservice.deleteBlog(id).subscribe(res=> {
      console.log(res)
    window.location.href="/user";
    });
  }
  logoutHandler()
  {
    sessionStorage.setItem("user",null);
    window.location.href="/home";
  }
  fetchBlogsByUser()
  {
  this.userservice.fetchBlogsByUser(this.user.id).subscribe(result=>this.blogs=result);
  }
  onSearch()
  {this.searched=true;
    this.userservice.fetchBlogsBySearch(this.searchstr).subscribe(res=>this.searchblogs=res);
  }
  ngOnInit() {this.searched=false;
    console.log("user..."+sessionStorage.getItem("user"))
    if(sessionStorage.getItem("user")=="null")
    {
      this.router.navigate(['/home']);}
  this.user=JSON.parse(sessionStorage.getItem("user"))[0];
  }

}
