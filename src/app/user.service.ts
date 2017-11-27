import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
let url='http://localhost:3000'
@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }
  fetchUser(id:number)
  {
    return this.http.get(`${url}/users?id=${id}`);
  }
  fetchBlogsByUser(id:number)
  {
    return this.http.get(`${url}/blogs?author=${id}`);
  }
  fetchBlogs()
  {
    return this.http.get(`${url}/blogs`);
  }
  fetchBlogsBySearch(str:string)
  {
    return this.http.get(`${url}/blogs?q=${str}`);
  }
  postBlog(blog:any)
  {
    return this.http.post(`${url}/blogs`,blog);
  }
  deleteBlog(id:number)
  {
    return this.http.delete(`${url}/blogs/${id}`);
  }
  updateBlog(id:number,blog:any)
  {
    return this.http.put(`${url}/blogs/${id}`,blog);
  }
  getByCategory(category:string)
  {
    return this.http.get(`${url}/blogs?category=${category}`)
  }
  updateUser(id:number, user:any)
  {
    return this.http.put(`${url}/users/${id}`,user);
  }
  getFavs(query:string)
  {
    return this.http.get(`${url}/blogs?${query}`);
  }
}
