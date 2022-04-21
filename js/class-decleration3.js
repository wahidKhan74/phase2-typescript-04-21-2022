var User3 = /** @class */ (function () {
    function User3(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.id = id;
        this.name = name;
        this.status = status;
    }
    User3.prototype.showInfo = function () {
        console.log("The user id : ".concat(this.id));
        console.log("The user name : ".concat(this.name));
        console.log("The user pass status : ".concat(this.status));
    };
    return User3;
}());
var user3 = new User3(1001, "John Smith", true);
user3.showInfo();
console.log("---------------");
console.log(user3);
