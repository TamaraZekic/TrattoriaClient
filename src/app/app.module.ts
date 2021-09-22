import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FilterComponent } from './shared/filter/filter.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { TableComponent } from './shared/table/table.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { MealActionsComponent } from './meals/meal-actions/meal-actions.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { MealFormComponent } from './forms/meal-form/meal-form.component';
import { CategoryFormComponent } from './forms/category-form/category-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    PaginationComponent,
    TableComponent,
    MealListComponent,
    MealActionsComponent,
    WelcomeComponent,
    MealFormComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
