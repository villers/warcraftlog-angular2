import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/map';

import {User} from '../model/Model';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    @Input() wowUser: User;
    constructor() {

    }
}
