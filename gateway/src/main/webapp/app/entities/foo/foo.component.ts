import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { EventManager, ParseLinks, PaginationUtil, JhiLanguageService, AlertService } from 'ng-jhipster';

import { Foo } from './foo.model';
import { FooService } from './foo.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-foo',
    templateUrl: './foo.component.html'
})
export class FooComponent implements OnInit {
foos: Foo[];
    currentAccount: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private fooService: FooService,
        private alertService: AlertService,
        private eventManager: EventManager,
        private principal: Principal
    ) {
        this.jhiLanguageService.setLocations(['foo']);
    }

    loadAll() {
        this.fooService.query().subscribe(
            (res: Response) => {
                this.foos = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInFoos();
    }

    trackId (index: number, item: Foo) {
        return item.id;
    }

    registerChangeInFoos() {
        this.eventManager.subscribe('fooListModification', (response) => this.loadAll());
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}
