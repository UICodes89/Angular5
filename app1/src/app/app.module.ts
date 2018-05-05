import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ShowDataComponent } from './show-data/show-data.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { HighiliterDirective } from './highiliter.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowDataComponent,
    FooterComponent,
    HighiliterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
