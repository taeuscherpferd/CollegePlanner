import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule, MatButtonModule, MatGridListModule, MatExpansionModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AUTH_SERVICE } from './interfaces/tokens/auth-service-interface.token';
import { LoginComponent } from './auth/login/login.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SettingsComponent } from './settings/settings.component';
import { SemesterViewComponent } from './semester-view/semester-view.component';
import { SemesterListComponent } from './semester-list/semester-list.component';
import { DATA_SERVICE } from './interfaces/tokens/data-service-interface.token';
import { SETTINGS_SERVICE } from './interfaces/tokens/settings-service-interface.token';
import { DRAG_N_DROP_SERVICE } from './interfaces/tokens/drag-n-drop-service-interface.token';
import { NETWORK_SERVICE } from './interfaces/tokens/network-service-interface.token';
import { DataService } from './services/data.service';
import { NetworkService } from './services/network.service';
import { DragNDropService } from './services/drag-n-drop.service';
import { SettingsService } from './services/settings.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    CourseComponent,
    CourseListComponent,
    SettingsComponent,
    SemesterViewComponent,
    SemesterListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [CourseListComponent, SettingsComponent],
  providers: [{provide: AUTH_SERVICE, useClass: AuthService},
              {provide: DATA_SERVICE, useClass: DataService},
              {provide: NETWORK_SERVICE, useClass: NetworkService},
              {provide: DRAG_N_DROP_SERVICE, useClass: DragNDropService},
              {provide: SETTINGS_SERVICE, useClass: SettingsService},
              {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill'} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
