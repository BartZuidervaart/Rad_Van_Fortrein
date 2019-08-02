import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './domain/start/start.component';
import { InzetComponent } from './domain/inzet/inzet.component';
import { ResultaatComponent } from './domain/resultaat/resultaat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatInputModule, MatButtonModule, 
  MatSelectModule, MatIconModule,MatSidenavModule, MatListModule,
  MatTabsModule, MatStepperModule, MatFormFieldModule, MatSliderModule, MatRadioModule
 } from '@angular/material';
import { TabsComponent } from './material/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    InzetComponent,
    ResultaatComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatStepperModule, 
    MatFormFieldModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
