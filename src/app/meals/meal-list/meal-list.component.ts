import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/model/Meal';
import { CategoryService } from 'src/app/services/category.service';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  filter: any = {
    label : 'Category'
  };

  filterInput: string = '';
  
  headerList : any = [
    {
      label : 'Name',
      class : 'col-8',
      field : 'name'
    },
    {
      label : 'Category',
      class : 'col-2',
      field : 'category.name'
    },
    {
      label : 'Price',
      class : 'col-2',
      field : 'price'
    }
  ];

  meals: any = [];

  mealCount: number = 0;

  constructor(private mealService : MealService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getMeals();
  }

  filtering(value: string){
    this.filterInput = value;
    this.mealService.getMealsServiceMethod(this.filterInput).subscribe((retVal:Meal[]) => {
      this.meals = retVal;
    });
  }

  getMeals(){
    this.mealService.getMealsServiceMethod().subscribe((retData: any) => {
      this.meals = retData;
      console.log(this.meals);
      this.mealCount = this.meals.length;
    })
  }

  paginatedMeals(value: any){
    this.meals = value;
  }


}
