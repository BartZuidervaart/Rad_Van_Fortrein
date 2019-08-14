import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './start/start.component';
import { InzetComponent } from './inzet/inzet.component';
import { ResultaatComponent } from './resultaat/resultaat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatInputModule, MatButtonModule, 
  MatSelectModule, MatIconModule,MatSidenavModule, MatListModule,
  MatTabsModule, MatStepperModule, MatFormFieldModule, MatSliderModule, MatRadioModule, MatTableModule, MatExpansionModule, MatDialogModule
 } from '@angular/material';
import { TabsComponent } from './material/tabs/tabs.component';
import { TabelComponent } from './inzet/tabel/tabel.component';
import { TreinComponent } from './trein/trein.component';
import { TreinenComponent } from './treinen/treinen.component';
import { TreinenelementComponent } from './treinen/treinenelement/treinenelement.component';
import { ResultaatElementComponent } from './resultaat/resultaat-element/resultaat-element.component';
import { InzetService } from './services/inzet.service';
import { InzettenComponent } from './inzetten/inzetten.component';
import { SpelersComponent } from './spelers/spelers.component';
import { ResultaatElementTimerComponent } from './resultaat/resultaat-element-timer/resultaat-element-timer.component';
import { TijdPipe } from './pipes/tijd.pipe';
import { RedirectComponent } from './redirect/redirect.component';
import { ErrorDialogComponent } from './inzet/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    InzetComponent,
    ResultaatComponent,
    TabsComponent,
    TabelComponent,
    TreinComponent,
    TreinenComponent,
    TreinenelementComponent,
    ResultaatElementComponent,
    InzettenComponent,
    SpelersComponent,
    ResultaatElementTimerComponent,
    TijdPipe,
    RedirectComponent,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
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
  entryComponents: [ErrorDialogComponent],
  providers: [ InzetService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
