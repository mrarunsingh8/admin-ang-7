import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { CategoryListComponent } from './category-list/category-list.component';

const categoryRoutes: Routes = [
	{path: '', component: CategoryListComponent}
];

@NgModule({
  declarations: [
  	CategoryListComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(categoryRoutes)
  ]
})
export class CategoryModule { }
