import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {CharacterParse, Specs} from "../model/Model";
import { List } from 'linqts/dist/linq';

@Injectable()
export class WarcraftService {
    private apiUrl: string = 'https://www.warcraftlogs.com:443/v1/';
    private apiKey: string = '19953fab295d93d4854fa405147b66b6';

    constructor(private _http: Http) {
        console.log('Warcraft Service Ready.');
    }

    getCharacterParse(characterName: string, serverName: string, serverRegion: string): Observable<CharacterParse[]> {
        return this._http.get(this.generateUrl(`parses/character/${characterName}/${serverName}/${serverRegion}`))
            .map(res => {
                let result = new List<CharacterParse>(res.json());

                return result
                    .OrderBy((i: CharacterParse) => i.name)
                    .ThenBy((i: CharacterParse) => {
                        return i.specs.filter((i: Specs) => !i.combined)[0].data[0].start_time;
                    })
                    .ToArray();

            })
            .catch(this.handleError);
    }

    private generateUrl(path: string) {
        return `${this.apiUrl}${path}?api_key=${this.apiKey}`;
    }

    private handleError(error: any) {
        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }
}
