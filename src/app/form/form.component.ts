import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user.service";

interface blog {
  title: string,
  author: number,
  id: number,
  content: string,
  category: string

}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ublog: blog;
  @Input("blog") cblog;
  @Input("showform") showform;

  constructor(private userservice: UserService) {


  }

  updateBlog() {
      this.userservice.updateBlog(this.cblog.id,this.ublog).subscribe(res=>{console.log(res);
        window.location.href="/user";
      }
      );
  }

  ngOnInit() {
    this.ublog = {
      title: this.cblog.title,
      author: JSON.parse(sessionStorage.getItem("user"))[0].id,
      category: this.cblog.category,
      id: this.cblog.id,
      content: this.cblog.content
    }
  }

}
