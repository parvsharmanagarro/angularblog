import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

interface Blog {
  id: number,
  title: string,
  content: string,
  author: number,
  category: string
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  blogs: any;
  blog: Blog;

  submissionHandler() {
    this.userservice.fetchBlogs().subscribe(res => {
      this.blogs = res;
      this.blog.id = this.blogs[this.blogs.length-1].id + 1;
      this.userservice.postBlog(this.blog).subscribe(
        result=> console.log(result)
    )
    })
  }

  constructor(private userservice: UserService) {
  this.blog={id:0,
  title:"",
  author:JSON.parse(sessionStorage.getItem("user"))[0].id,
  content:"",
    category:"other"
  };
  }

  ngOnInit() {
  }

}
