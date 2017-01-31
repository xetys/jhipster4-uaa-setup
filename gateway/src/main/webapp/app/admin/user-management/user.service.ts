import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    create(user: User): Observable<Response> {
        return this.http.post(`uaa/api/users`, user);
    }

    update(user: User): Observable<Response> {
        return this.http.put(`uaa/api/users`, user);
    }

    find(login: string): Observable<User> {
        return this.http.get(`uaa/api/users/${login}`).map((res: Response) => res.json());
    }

    query(req?: any): Observable<Response> {
        let params: URLSearchParams = new URLSearchParams();
        if (req) {
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('filter', req.filter);
        }

        let options = {
            search: params
        };

        return this.http.get(`uaa/api/users`, options);
    }

    delete(login: string): Observable<Response> {
        return this.http.delete(`uaa/api/users/${login}`);
    }
}
