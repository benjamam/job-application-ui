import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptedApplicationsComponent } from './components/accepted-applications/accepted-applications.component';


const routes: Routes = [
  { path: '', component: AcceptedApplicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
