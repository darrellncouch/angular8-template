import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MatSelectModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatIcon, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

const routes : Routes = [
    {path: "", component: HomeComponent}
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [ 
        BrowserModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatOptionModule,

        RouterModule.forChild(routes)

       
    ],
    providers: [],
    exports: [HomeComponent]
})
export class ContentModule {}