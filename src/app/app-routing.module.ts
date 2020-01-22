import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './students/list/list.component';
import {CreateComponent} from './students/create/create.component';
import {DetailsComponent} from './students/details/details.component';


const routes: Routes = [
  {path: 'students', component: ListComponent},
  {path: 'students/create', component: CreateComponent},
  {path: 'students/:id/details', component: DetailsComponent},
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ListComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
