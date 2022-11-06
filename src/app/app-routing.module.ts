import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';  
import { ContractsListComponent } from './pages/contracts/contracts-list/contracts-list.component';



const routes: Routes = [
  {
    path: 'list-contracts',
    component: ContractsListComponent,
  }
];
//teste
@NgModule({
  imports: [RouterModule.forRoot(routes), MatSidenavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
