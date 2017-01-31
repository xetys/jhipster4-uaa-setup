import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { User } from './user.model';
import { UserModalService } from './user-modal.service';
import { UserService } from './user.service';

@Component({
    selector: 'jhi-user-mgmt-delete-dialog',
    templateUrl: './user-management-delete-dialog.component.html'
})
export class UserMgmtDeleteDialogComponent {

    user: User;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private userService: UserService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['user-management']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (login) {
        this.userService.delete(login).subscribe(response => {
            this.eventManager.broadcast({ name: 'userListModification',
                content: 'Deleted a user'});
            this.activeModal.dismiss(true);
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
        });
    }

}

@Component({
    selector: 'jhi-user-delete-dialog',
    template: ''
})
export class UserDeleteDialogComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private userModalService: UserModalService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.userModalService.open(UserMgmtDeleteDialogComponent, params['login']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
