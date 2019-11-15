import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Toolbar } from './layout/toolbar/toolbar.component';

import {MatSidenavModule, MatButtonModule, MatIconModule} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Main } from './layout/main/main.component';
import { ContentModule } from './content/content.module';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {path: "", loadChildren: "./content/content.module/ContentModule"},
  {path: "**", redirectTo: ""}
];

@NgModule({
  declarations: [
    AppComponent,
    Toolbar,
    Main
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    ContentModule,


    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
