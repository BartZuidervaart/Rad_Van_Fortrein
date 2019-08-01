import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './domain/start/start.component';
import { InzetComponent } from './domain/inzet/inzet.component';
import { ResultaatComponent } from './domain/resultaat/resultaat.component';


const routes: Routes = [
  { path: "home", component: StartComponent },
  { path: "inzet", component: InzetComponent },
  { path: "resultaat", component: ResultaatComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
