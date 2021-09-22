import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { CategoryFormComponent } from './forms/category-form/category-form.component';
import { MealActionsComponent } from './meals/meal-actions/meal-actions.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'meal-list', component: MealListComponent},
  { path: 'meal-change', component: MealActionsComponent},
  { path: 'add-category', component: CategoryFormComponent},
  { path: '' , redirectTo : '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
