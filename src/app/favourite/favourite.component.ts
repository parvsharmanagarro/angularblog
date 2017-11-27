import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  query: string='';
  blogs:any;
  constructor(private userservice:UserService) {
  }

  ngOnInit() {
    let temp=JSON.parse(sessionStorage.getItem("user"))[0].blogs;
    for(var i=0;i<temp.length;i++)
    {
      if(i==temp.length-1)
        this.query=this.query+'id='+temp[i];
      else
        this.query=this.query+'id='+temp[i]+'&';

    }
    //console.log(this.query);
    this.userservice.getFavs(this.query).subscribe(res=>this.blogs=res);

  }

}
