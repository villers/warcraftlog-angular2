import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { WarcraftService } from '../services/warcraft.service';
import 'rxjs/add/operator/map';

import { User } from '../model/Model';

@Component({
    moduleId: module.id,
    selector: 'searchform',
    templateUrl: 'searchform.component.html'
})
export class SearchformComponent {
    @Input() wowUser: User;
    constructor(private _warcraftService: WarcraftService) {

    }

    searchUser() {
        if (this.wowUser.name.length > 0 && this.wowUser.serverName.length > 0 && this.wowUser.serverRegion.length) {
            this.getUserInformation();
        }
    }

    getUserInformation() {
        this._warcraftService.getCharacterParse(this.wowUser.name, this.wowUser.serverName, this.wowUser.serverRegion).subscribe(ranking => {
                this.wowUser.characterParse = ranking;
            },
            (err) => {
                console.log('err:' + err);
                this.wowUser.characterParse = null;
            },
            () => console.log('Done')
        );
    }
}
