import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/model/Meal';
import { CategoryService } from 'src/app/services/category.service';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meal-actions',
  templateUrl: './meal-actions.component.html',
  styleUrls: ['./meal-actions.component.css']
})
export class MealActionsComponent implements OnInit {

  meals : any = [];

  filterInput : string = '';

  filter : any = {
    label : "Name"
  };

  currentMeal : Meal | undefined = undefined;
  currentButton : string = '';

  mealCount: number = 0;

  headerList: any = [
    {
      label: 'Name',
      class: 'col-4',
      field: 'name'
    },
    {
      label: 'Category',
      class: 'col-2',
      field: 'category.name'
    },
    {
      label: 'Price',
      class: 'col-2',
      field: 'price'
    },
    {
      label: 'Actions',
      class: 'col-2'
    }
  ];

  buttons : any = [
    {
      label: 'Delete',
      class: "btn btn-danger"
    },
    {
      label: 'Update',
      class: 'btn btn-light'
    }
  ];



  constructor(private mealService: MealService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getMeals();
    this.getAllMeals();
  }

  getMeals(value: string = ''){
    this.mealService.getMealsPagedServiceMethod(0,5).subscribe((retVal: Meal[]) => {
      this.meals = retVal;

      this.getAllMeals();
    });
  }

  filtering(value: string){
    this.filterInput = value;
    this.mealService.getMealsServiceMethod(this.filterInput).subscribe((retVal: Meal[]) => {
      this.meals = retVal;
    });
  }

  getAllMeals(){
    this.mealService.getMealsServiceMethod().subscribe((retVal: Meal[]) => {
      this.mealCount = retVal.length;
    });
  }

  onAction(value:any){
    if(value.labelKey == "Update"){
      this.currentMeal = value.entityKey;
    }else if(value.labelKey == "Delete"){
      this.deleteMeal(value.entityKey.id)
    }
  }

  deleteMeal(id: number){
    this.mealService.deleteMealServiceMethod(id).subscribe((retVal: any) => {
      this.getMeals();
    })
  }

  paginatedMeals(value: any){
    this.meals = value;
  }

}
