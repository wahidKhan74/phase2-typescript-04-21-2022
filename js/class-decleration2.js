var User = /** @class */ (function () {
    function User(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    User.prototype.showInfo = function () {
        console.log("The user id : ".concat(this.id));
        console.log("The user name : ".concat(this.name));
        console.log("The user pass status : ".concat(this.status));
    };
    return User;
}());
var user = new User(1001, "John Smith", true);
user.showInfo();
console.log(user);
