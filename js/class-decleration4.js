var User4 = /** @class */ (function () {
    function User4(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.id = id;
        this.name = name;
        this.status = status;
    }
    User4.prototype.showInfo = function () {
        console.log("The user id : ".concat(this.id));
        console.log("The user name : ".concat(this.name));
        console.log("The user pass status : ".concat(this.status));
    };
    User4.prototype.getId = function () { return this.id; };
    User4.prototype.setId = function (id) { this.id = id; };
    User4.prototype.getName = function () { return this.name; };
    User4.prototype.setName = function (name) { this.name = name; };
    return User4;
}());
var user4 = new User4(1001, "John Smith", true);
user4.showInfo();
console.log("---------------");
// set properties
user4.setId(34534);
user4.setName("johnsmith");
console.log(user4.getId());
console.log(user4.getName());
