import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './pages/course/course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    data: {
      title: 'Home page',
      icon: 'icon-home',
      caption: 'Welcome to yukon assignment',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
