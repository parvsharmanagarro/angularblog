import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any;

  fetchBlogs() {
    this.userservice.fetchBlogs().subscribe(result => this.blogs = result)
  }

  constructor(private userservice: UserService) {
  }

  favHandler(blog: any) {
    if (sessionStorage.getItem("user") == "null")
      alert("Please login first");
    else {
      console.log("in handler" + blog.id);
      let usercopy = JSON.parse(sessionStorage.getItem("user"));
      if (usercopy[0].blogs.indexOf(blog.id) != -1) {
        if(confirm("Already added to favorites!! Do you want to remove this blog from your favorites?")==true)
        {
        let index=usercopy[0].blogs.indexOf(blog.id)
          usercopy[0].blogs.splice(index,1);
        console.log(usercopy[0].blogs);
        alert(blog.title+" is No more a Fav now");
          this.userservice.updateUser(usercopy[0].id, usercopy[0]).subscribe(res => {
            console.log(res);
            this.setStorage(usercopy[0].id);
            // sessionStorage.setItem("user",usercopy);
          })

        }

      }
      else {
        usercopy[0].blogs.push(blog.id);
        this.userservice.updateUser(usercopy[0].id, usercopy[0]).subscribe(res => {
          console.log(res);
          alert(blog.title + " Added to favorites");
          this.setStorage(usercopy[0].id);
         // sessionStorage.setItem("user",usercopy);
        })
      }
    }
  }
  setStorage(id:number)
  {
    this.userservice.fetchUser(id).subscribe(res=>sessionStorage.setItem("user",JSON.stringify(res)));
  }
  ngOnInit() {
    this.fetchBlogs();
  }

}
