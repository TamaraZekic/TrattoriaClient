import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Meal } from 'src/app/model/Meal';
import { MealService } from 'src/app/services/meal.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Output()
  mealsPaginatedEmiter = new EventEmitter();

  constructor(private mealService: MealService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.pageCount = Math.ceil(this.mealsCount/this.size);
  }

  ngOnInit(): void {
    this.loadData();
  }


  meals : Meal[] = [];

  public page = 0;
  public size = 5;
  public pageCount = 0;

  @Input()
  mealsCount = 0;

  

  loadData(){
    this.mealService.getMealsPagedServiceMethod(this.page, this.size).subscribe(
      (retVal: Meal[]) => {
        this.meals = retVal;
        this.mealsPaginatedEmiter.emit(this.meals);
        //this.pageCount = Math.ceil(this.meals.length / this.size);
    })
  }

  previousPage(){
    this.page--;
    this.loadData();
  }

  nextPage(){
    this.page++;
    this.loadData();
  }
}
