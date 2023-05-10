"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperUtils = void 0;
var SuperUtils;
(function (SuperUtils) {
    SuperUtils.add = (...params) => {
        const sum = params.reduce((acc, current) => acc + current, 0);
        return sum;
    };
    class User {
        constructor(gender) {
            this.gender = gender;
        }
    }
    SuperUtils.User = User;
})(SuperUtils = exports.SuperUtils || (exports.SuperUtils = {}));
console.log(Utils.add(3, 4));
// const result = AddErGhor.add(3, 4);
// const result2 = AddErGhor.myName;
// const user1 = new AddErGhor.User("Persian", 25);
// console.log(user1);
