class User {

    // properties decleration with access modifiers
    private id:number;
    public name:string;
    protected status : boolean;

    constructor(id:number, name:string, status:boolean){
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

let user = new User(1001,"John Smith",true);

user.showInfo();
console.log(user);
