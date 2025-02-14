import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';

export const routes: Routes = [
    {
      path: "",
      component: HomeComponent
  
    },
    {
      path: 'about',
      component: AboutComponent
    },
    // {
    //   path: 'courses/:id',
    //   component: CourseComponent,
    //   resolve: {
    //     // course: CourseResolver
    //   }
    // },
    {
      path: "**",
      redirectTo: '/'
    }
  ];
  
