import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  categoryInput: string = '';
  category : Category = new Category('', 0);
  categories: Category[] = [];

  headerList: any = [
    {
      label: "Name",
      class: "col-6",
      field: "name"
    },
    {
      label: "Id",
      class: "col-6",
      field: "id"
    }
  ];

  buttons : any = [
    {
      label: 'Delete',
      class: "btn btn-danger"
    }
  ]


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  addCategory(){
    this.category = new Category(this.categoryInput, 0);
    this.categoryService.addCategory(this.category).subscribe( retVal => {
      this.getCategories();
    });
  }

  getCategories(){
    this.categoryService.getCategories().subscribe( (retVal: Category[]) => {
      this.categories = retVal;
    })
  }

  onAction(value:any){
    if(value.labelKey == "Delete"){
      this.deleteCategory(value.entityKey.id);
    }
  }

  deleteCategory(id:number){
    this.categoryService.deleteCategory(id).subscribe( (retVal:any) => {
      this.getCategories();
    },
    err => {
      alert("Category can't be removed.");
  });
  }
}
