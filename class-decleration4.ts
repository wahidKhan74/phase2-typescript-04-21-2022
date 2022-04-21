class User4 {

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

    getId() { return this.id }
    setId(id:number) { this.id = id; }

    getName(){ return this.name }
    setName(name:string){ this.name  = name;  }

}

let user4 = new User4(1001,"John Smith",true);

user4.showInfo();
console.log("---------------");

// set properties
user4.setId(34534);
user4.setName("johnsmith");

console.log(user4.getId());
console.log(user4.getName());
