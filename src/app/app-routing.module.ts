import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContractsListComponent } from './pages/contracts/contracts-list/contracts-list.component';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'list-contracts',
    component: ContractsListComponent,
  },
  {
    path: 'page-layout',
    component: PageLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
