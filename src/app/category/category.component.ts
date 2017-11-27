import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  blogs: any;

  constructor(private userservice: UserService) {
  }

  getOthers() {
    this.userservice.getByCategory("others").subscribe(result => this.blogs=result)
  }

  getMovies() {
    this.userservice.getByCategory("movies").subscribe(result => this.blogs=result)
  }

  getSports() {
    this.userservice.getByCategory("Sports").subscribe(result => this.blogs=result)
  }

  ngOnInit() {

  }

}
