import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})
export class SearchedComponent implements OnInit {
@Input("blogs") blogs;
  constructor() { }

  ngOnInit() {
  }

}
