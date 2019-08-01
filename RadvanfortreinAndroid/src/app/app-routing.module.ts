import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FietsComponent } from './fiets/fiets.component';

const routes: Routes = [
  { path: "tijd", component: FietsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
