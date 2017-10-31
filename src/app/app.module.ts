import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, PreloadAllModules} from '@angular/router';
import {rootRouterConfig} from './app.routes';

import { AppComponent } from './app.component';

import { IndexComponent } from './index/index.component';
import { FooterComponent } from './share/footer/footer.component';
import { TaskbarComponent } from './share/taskbar/taskbar.component';
import { HeadComponent } from './share/head/head.component';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { KidsComponent } from './kids/kids.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';

import { PopularitylistComponent } from './boys-goods/boys-popularitylist/popularitylist.component';
import { ThelatestreportComponent } from './boys-goods/boys-thelatestreport/thelatestreport.component';
import { NewarrivalsComponent } from './boys-goods/boys-newarrivals/newarrivals.component';

import { TrendfashionComponent } from './girls-goods/girls-trendfashion';
import { EuropeamericaComponent } from './girls-goods/girls-europeamerica';
import { NewarrivaldComponent } from './girls-goods/girls-newarrivald';

import { HotcategoriesComponent } from './kids-goods/kids-hotcategories';
import { BoykidsComponent } from './kids-goods/kids-boykids';

import { BeautyComponent } from './lifestyle-goods/lifestyle-beauty';
import { CategoryComponent } from './lifestyle-goods/lifestyle-category';
import { TopComponent } from './lifestyle-goods/lifestyle-top';

// 添加
import { UserIndexComponent } from './user-index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { ChangeClassService } from './myServices';
import {HttpModule} from '@angular/http';
import {LoginComponent} from './login';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    HeadComponent,
    BoysComponent,
    GirlsComponent,
    TaskbarComponent,
    PopularitylistComponent,
    ThelatestreportComponent,
    NewarrivalsComponent,
    TrendfashionComponent,
    EuropeamericaComponent,
    NewarrivaldComponent,
    KidsComponent,
    HotcategoriesComponent,
    BoykidsComponent,
    LifestyleComponent,
    BeautyComponent,
    CategoryComponent,
    TopComponent,

    UserIndexComponent,


// 添加
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, {preloadingStrategy: PreloadAllModules}),

    // 添加
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
