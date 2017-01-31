import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Foo } from './foo.model';
import { FooPopupService } from './foo-popup.service';
import { FooService } from './foo.service';

@Component({
    selector: 'jhi-foo-delete-dialog',
    templateUrl: './foo-delete-dialog.component.html'
})
export class FooDeleteDialogComponent {

    foo: Foo;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private fooService: FooService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['foo']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.fooService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'fooListModification',
                content: 'Deleted an foo'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-foo-delete-popup',
    template: ''
})
export class FooDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private fooPopupService: FooPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.fooPopupService
                .open(FooDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
