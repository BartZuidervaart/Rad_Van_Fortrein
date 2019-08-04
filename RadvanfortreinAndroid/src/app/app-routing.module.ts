import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './domain/start/start.component';
import { InzetComponent } from './domain/inzet/inzet.component';
import { ResultaatComponent } from './domain/resultaat/resultaat.component';
import { TabelComponent } from './domain/inzet/tabel/tabel.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: StartComponent },
  { path: "inzet", component: InzetComponent },
  { path: "resultaat", component: ResultaatComponent },
  { path: "tabel", component: TabelComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
