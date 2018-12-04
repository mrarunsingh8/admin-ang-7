import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
	{
		path: '', component: MainLayoutComponent, children:[
			{path:'', component: DashboardComponent},
			{path: 'category', loadChildren: "./category/category.module#CategoryModule"},
			{path: 'user', loadChildren: "./users/users.module#UsersModule"}
		]
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
