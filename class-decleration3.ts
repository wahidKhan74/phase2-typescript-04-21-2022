class User3 {

    constructor(private id:number, public name:string, protected status:boolean){
        this.id = id;
        this.name = name; 
        this.status = status;
    }

    showInfo() {
        console.log(`The user id : ${this.id}`);
        console.log(`The user name : ${this.name}`);
        console.log(`The user pass status : ${this.status}`);
    }
}

let user3 = new User3(1001,"John Smith",true);

user3.showInfo();
console.log("---------------");
console.log(user3);
