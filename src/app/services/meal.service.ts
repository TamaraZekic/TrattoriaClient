import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/model/Meal';

@Injectable({
  providedIn: 'root'
})

export class MealService {

  url : string = 'http://localhost:8080/api/meals';


  constructor(private http : HttpClient) { }

  getMealsServiceMethod(value:string = ''): Observable<any>{
    const params = new HttpParams()
      .set('filterValue', value);

    let meals = this.http.get(this.url,{params: params});
    return meals;
  }

  getMealsPagedServiceMethod(page : any, size: any): Observable<Meal[]>{
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<Meal[]>(this.url, { params });
  }

  addMealServiceMethod(meal : Meal) : Observable<any>{
    return this.http.post(this.url, meal);
  }

  updateMealServiceMethod(meal : Meal) : Observable<any>{
    return this.http.put(this.url, meal);
  }

  deleteMealServiceMethod(id : number)  {
    return this.http.delete(this.url + '/' + id);
  }
}
