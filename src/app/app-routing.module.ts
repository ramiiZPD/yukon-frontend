import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { CourseComponent } from './modules/course/pages/course/course.component';
import { StudentComponent } from './modules/student/pages/student/student.component';

const course: Route = {
  path: '',
  component: CourseComponent,
  children: [
    {
      path: 'course',
      loadChildren: './modules/course/course.module#CourseModule',
      pathMatch: 'full'
    }
  ]
};

const student: Route = {
  path: 'user',
  component: StudentComponent,
  children: [
    {
      path: '',
      loadChildren: './modules/student/student.module#StudentModule',
      pathMatch: 'full'
    }
  ]
};

const routes: Routes = [course, student];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
