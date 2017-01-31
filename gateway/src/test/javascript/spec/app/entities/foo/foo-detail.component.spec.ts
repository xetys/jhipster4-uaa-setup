import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils } from 'ng-jhipster';
import { JhiLanguageService } from 'ng-jhipster';
import { MockLanguageService } from '../../../helpers/language.service';
import { MockActivatedRoute } from '../../../helpers/activated-route.service';
import { FooDetailComponent } from '../../../../../../main/webapp/app/entities/foo/foo-detail.component';
import { FooService } from '../../../../../../main/webapp/app/entities/foo/foo.service';
import { Foo } from '../../../../../../main/webapp/app/entities/foo/foo.model';

describe('Component Tests', () => {

    describe('Foo Management Detail Component', () => {
        let comp: FooDetailComponent;
        let fixture: ComponentFixture<FooDetailComponent>;
        let service: FooService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [FooDetailComponent],
                providers: [
                    MockBackend,
                    BaseRequestOptions,
                    DateUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useClass: MockActivatedRoute
                    },
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    {
                        provide: JhiLanguageService,
                        useClass: MockLanguageService
                    },
                    FooService
                ]
            }).overrideComponent(FooDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(FooDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FooService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Foo(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith('entityId');
            expect(comp.foo).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
