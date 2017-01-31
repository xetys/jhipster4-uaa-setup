import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { FooComponent } from './foo.component';
import { FooDetailComponent } from './foo-detail.component';
import { FooPopupComponent } from './foo-dialog.component';
import { FooDeletePopupComponent } from './foo-delete-dialog.component';

import { Principal } from '../../shared';


export const fooRoute: Routes = [
  {
    path: 'foo',
    component: FooComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jh4UaaApp.foo.home.title'
    }
  }, {
    path: 'foo/:id',
    component: FooDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jh4UaaApp.foo.home.title'
    }
  }
];

export const fooPopupRoute: Routes = [
  {
    path: 'foo-new',
    component: FooPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jh4UaaApp.foo.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'foo/:id/edit',
    component: FooPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jh4UaaApp.foo.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'foo/:id/delete',
    component: FooDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jh4UaaApp.foo.home.title'
    },
    outlet: 'popup'
  }
];
