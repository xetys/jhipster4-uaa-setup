import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Foo } from './foo.model';
import { FooService } from './foo.service';

@Component({
    selector: 'jhi-foo-detail',
    templateUrl: './foo-detail.component.html'
})
export class FooDetailComponent implements OnInit, OnDestroy {

    foo: Foo;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private fooService: FooService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['foo']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.fooService.find(id).subscribe(foo => {
            this.foo = foo;
        });
    }

    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
