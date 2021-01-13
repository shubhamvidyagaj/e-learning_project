import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {NgForm,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TestingComponent } from './testing/testing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RoleGuard } from './guard/role.guard';
import { AuthGuard } from './guard/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { CourseAddComponent } from './admin/course-add/course-add.component';
import { CourseUpdateComponent } from './admin/course-update/course-update.component';
import { GlobalCourseComponent } from './student/global-course/global-course.component';
import { SelectedCourseComponent } from './student/selected-course/selected-course.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewCourseComponent } from './student/view-course/view-course.component';
import { SyllabusAddComponent } from './admin/syllabus-add/syllabus-add.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TestingComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LogoutComponent,
    CourseListComponent,
    CourseAddComponent,
    CourseUpdateComponent,
    GlobalCourseComponent,
    SelectedCourseComponent,
    PaymentComponent,
    ViewCourseComponent,
    SyllabusAddComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
