import { Component } from '@angular/core';
import { User } from './model/Model';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    public wowUser: User;

    constructor() {
        this.wowUser = new User();
    }
}
