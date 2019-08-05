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
  MatTabsModule, MatStepperModule, MatFormFieldModule, MatSliderModule, MatRadioModule, MatTableModule, MatExpansionModule
 } from '@angular/material';
import { TabsComponent } from './material/tabs/tabs.component';
import { TabelComponent } from './domain/inzet/tabel/tabel.component';
import { ResultaatElementComponent } from './domain/resultaat/resultaat-element/resultaat-element.component';
import { ResultaatspelerComponent } from './domain/resultaatspeler/resultaatspeler.component';
import { HttpClientModule } from '@angular/common/http';
import { InzetService } from './service/inzet.service'

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    InzetComponent,
    ResultaatComponent,
    TabsComponent,
    TabelComponent,
    ResultaatElementComponent,
    ResultaatspelerComponent,
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
    MatRadioModule,
    MatTableModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [ InzetService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
