import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Foo } from './foo.model';
import { FooService } from './foo.service';
@Injectable()
export class FooPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private fooService: FooService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.fooService.find(id).subscribe(foo => {
                this.fooModalRef(component, foo);
            });
        } else {
            return this.fooModalRef(component, new Foo());
        }
    }

    fooModalRef(component: Component, foo: Foo): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.foo = foo;
        modalRef.result.then(result => {
            console.log(`Closed with: ${result}`);
            this.isOpen = false;
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
            this.isOpen = false;
        });
        return modalRef;
    }
}
