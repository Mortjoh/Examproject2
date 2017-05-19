import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TravelComponent } from './travel.component';
import { PageNotFoundComponent} from './pageNotFound.component';

const appRoutes: Routes =[
  { path: 'travels', component: TravelComponent },
  { path: '**', component: PageNotFoundComponent }, {
    path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
