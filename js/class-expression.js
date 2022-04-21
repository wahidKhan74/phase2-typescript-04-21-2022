var StudentA = /** @class */ (function () {
    function class_1(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    class_1.prototype.showInfo = function () {
        console.log("The student id : ".concat(this.id));
        console.log("The student name : ".concat(this.name));
        console.log("The student pass status : ".concat(this.status));
    };
    return class_1;
}());
var studenta = new StudentA(1001, "John Smith", true);
studenta.showInfo();
console.log("--------------");
console.log(studenta);
