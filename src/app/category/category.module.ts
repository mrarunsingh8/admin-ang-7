import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';


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
    RouterModule.forChild(categoryRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class CategoryModule { }
