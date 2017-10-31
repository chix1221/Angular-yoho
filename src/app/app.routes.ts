import {Routes} from '@angular/router';

import {IndexComponent} from './index';

import {GirlsComponent} from './girls';
import {KidsComponent} from './kids';
import {LifestyleComponent} from './lifestyle';

import {LoginComponent} from './login';
import { UserIndexComponent } from './user-index';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  }, {
    path: 'girls',
    component: GirlsComponent
  }, {
    path: 'kids',
    component: KidsComponent
  }, {
    path: 'lifestyle',
    component: LifestyleComponent
  },
  {

    path: 'login',
    component: LoginComponent
  },
  {

    path: 'user',
    component: UserIndexComponent
  }
];
