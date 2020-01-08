import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { ListComponent } from './students/list/list.component';
import { DetailsComponent } from './students/details/details.component';
import {CreateComponent} from './students/create/create.component';
import {HttpClientModule} from '@angular/common/http';
import {StudentService} from './students/student.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
