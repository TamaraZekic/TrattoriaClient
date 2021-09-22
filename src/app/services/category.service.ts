import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  url : string = 'http://localhost:8080/api/categories';
  constructor(private http : HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get(this.url);
  }

  addCategory(category : Category) : Observable<any>{
    return this.http.post(this.url, category);
  }

  updateCategory(category : Category) : Observable<any>{
    return this.http.put(this.url, category);
  }

  deleteCategory(id : number) : Observable<any>{
    return this.http.delete(this.url + '/' + id);
  }
}
