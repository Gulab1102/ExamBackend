import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuardService } from './services/admin-guard.service';
import { NormalGuardService } from './services/normal-guard.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { QuizesComponent } from './pages/admin/quizes/quizes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddquestionComponent } from './pages/admin/addquestion/addquestion.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'

  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'

  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuardService],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'categories',
        component:ViewCategoriesComponent
      },
      {
        path:'add-category',
        component:AddCategoryComponent
      },
      {
        path:'quizes',
        component:QuizesComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'quiz/:qId',
        component:UpdateQuizComponent
      },
      {
        path:'view-questions/:id/:title',
        component:ViewQuestionsComponent
      },
      {
        path:'add-questions/:qid/:title',
        component:AddquestionComponent
      }

    ]

  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate:[NormalGuardService]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
