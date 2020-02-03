import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: MainComponent, /*canActivate: [AuthGuard]*/},
  //{ path: 'docs', component: DocsComponent, canActivate: [AuthGuard]},
  // { path: 'edit/:postId', component: PostComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  //{ path: 'create', component: CustomerCreateComponent, canActivate: [AuthGuard]},
  //{path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }