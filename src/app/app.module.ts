import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { ListComponent } from './students/list/list.component';
import { DetailsComponent } from './students/details/details.component';
import {CreateComponent} from './students/create/create.component';
import {HttpClientModule} from '@angular/common/http';
import {StudentService} from './students/student.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    ListComponent,
    DetailsComponent,
    CreateComponent
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
