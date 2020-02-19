import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { DanhMucComponent } from './danh-muc/danh-muc.component';
import { ThemDanhMucComponent } from './them-danh-muc/them-danh-muc.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: DanhMucComponent
  },

  {
    path: 'them-danh-muc', component: ThemDanhMucComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DanhMucComponent,
    ThemDanhMucComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
