import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CourseAddComponent } from './admin/course-add/course-add.component';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { CourseUpdateComponent } from './admin/course-update/course-update.component';
import { SyllabusAddComponent } from './admin/syllabus-add/syllabus-add.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { GlobalCourseComponent } from './student/global-course/global-course.component';
import { SelectedCourseComponent } from './student/selected-course/selected-course.component';
import { ViewCourseComponent } from './student/view-course/view-course.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"student_course-list",component:GlobalCourseComponent,canActivate:[AuthGuard]},
  {path:"student_selectedCourse-list",component:SelectedCourseComponent,canActivate:[AuthGuard]},
  {path:"payment",component:PaymentComponent,canActivate:[AuthGuard]},
  {path:"view_course-details/:id",component:ViewCourseComponent,canActivate:[AuthGuard]},
  {path:"home",component:HomeComponent},
  {path:"admin_course-list",component:CourseListComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:"admin_course-add",component:CourseAddComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:"admin_course-update/:id",component:CourseUpdateComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:"syllabus/:id",component:SyllabusAddComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:"logout",component:LogoutComponent},
  {path:"aboutUs",component:AboutusComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
