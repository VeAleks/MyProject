import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ModalsComponent } from './modals/modals.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HomepageComponent } from './homepage/homepage.component';


const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'open-close', component: OpenCloseComponent },
  { path: 'modals', component: ModalsComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ModalsComponent,
    OpenCloseComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
