import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { BlogIntroComponent } from './blog-intro/blog-intro.component';
import { FilterPostsComponent } from './filter-posts/filter-posts.component';
import { ShortPostsPipe } from './filter-posts/short-posts.pipe';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WINDOW_PROVIDERS } from './window.service';

const appRoutes: Routes = [
  
  { path: '', component: BlogIntroComponent },
  { path: 'news', component: BlogComponent },
  { path: 'portfolio', component: FilterPostsComponent },
  { path: 'information', component: BlogIntroComponent },
  { path: 'journal', component: FilterPostsComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HeaderComponent,
    BlogIntroComponent,
    BlogComponent,
    FilterPostsComponent,
    ShortPostsPipe,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
