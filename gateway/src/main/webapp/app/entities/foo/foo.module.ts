import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { Jh4UaaSharedModule } from '../../shared';

import {
    FooService,
    FooPopupService,
    FooComponent,
    FooDetailComponent,
    FooDialogComponent,
    FooPopupComponent,
    FooDeletePopupComponent,
    FooDeleteDialogComponent,
    fooRoute,
    fooPopupRoute,
} from './';

let ENTITY_STATES = [
    ...fooRoute,
    ...fooPopupRoute,
];

@NgModule({
    imports: [
        Jh4UaaSharedModule,

        InfiniteScrollModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        FooComponent,
        FooDetailComponent,
        FooDialogComponent,
        FooDeleteDialogComponent,
        FooPopupComponent,
        FooDeletePopupComponent,
    ],
    entryComponents: [
        FooComponent,
        FooDialogComponent,
        FooPopupComponent,
        FooDeleteDialogComponent,
        FooDeletePopupComponent,
    ],
    providers: [
        FooService,
        FooPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jh4UaaFooModule {}

