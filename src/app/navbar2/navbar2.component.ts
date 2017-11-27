import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
@Input("myblogs") myBlogs;
@Input ("name") name;
  constructor() { }

  ngOnInit() {
  }

}
