import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { Meal } from 'src/app/model/Meal';
import { CategoryService } from 'src/app/services/category.service';
import { MealService } from 'src/app/services/meal.service';


@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit, OnChanges {

  categories: Category[] = [];

  @Output()
  emiter = new EventEmitter();
 
  nameInput: string = '';
  priceInput: number = 0;
  selectCategoryInput: number | undefined = 0;

  @Input()
  meal : Meal | undefined = undefined;

  

  constructor(private categoryService: CategoryService, private mealService: MealService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnChanges(): void{
    this.updateMeal();
    
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((retVal: Category[]) => {
      this.categories = retVal;
    });
  }

  saveMeal(){
    let category = this.categories.find(el => el.id == this.selectCategoryInput)
    let meal : Meal = new Meal(0,this.nameInput, category, this.priceInput);

    if(this.meal != undefined){
      meal.id = this.meal.id;
      this.mealService.updateMealServiceMethod(meal).subscribe((retVal: any) => {
        this.meal = undefined;
        this.emiter.emit('');
      })
    }else{
      this.mealService.addMealServiceMethod(meal).subscribe((retVal: any) => {
        this.emiter.emit('');
      });
    }
    
  }

  updateMeal(){
    if(this.meal != undefined){
      this.nameInput = this.meal.name;
      this.priceInput = this.meal.price;
      this.selectCategoryInput = this.meal.category?.id;
    }
  }

  resetForm(){
    this.nameInput = '';
    this.priceInput = 0;
    this.selectCategoryInput = 0;
    this.meal = undefined;
  }
}
