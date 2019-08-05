import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { InzetComponent } from './inzet/inzet.component';
import { ResultaatComponent } from './resultaat/resultaat.component';
import { TabelComponent } from './inzet/tabel/tabel.component';


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
