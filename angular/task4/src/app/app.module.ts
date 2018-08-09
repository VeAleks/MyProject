import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HeaderComponent } from './header/header.component';
import { BlogIntroComponent } from './blog-intro/blog-intro.component';
import { FilterPostsComponent } from './filter-posts/filter-posts.component';
import { ShortPostsPipe } from './filter-posts/short-posts.pipe';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HeaderComponent,
    BlogIntroComponent,
    FilterPostsComponent,
    ShortPostsPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
