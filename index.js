"use strict";
class User {
    set login(l) {
        this._login = `user-${l}`;
    }
    get login() {
        return this._login;
    }
}
const user = new User();
user.login = 'myLogin';
