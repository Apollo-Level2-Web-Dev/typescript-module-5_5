"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils;
(function (Utils) {
    Utils.myName = "Persian";
    Utils.add = (param1, param2) => {
        return param1 + param2;
    };
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    Utils.User = User;
})(Utils || (Utils = {}));
class Add {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getResult() {
        return this.x + this.y;
    }
}
