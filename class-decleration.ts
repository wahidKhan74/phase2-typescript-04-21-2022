class Student {

    // properties decleration
    id:number;
    name:string;
    status : boolean;

    constructor(id:number, name:string, status:boolean){
        this.id = id;
        this.name = name; 
        this.status = status;
    }

    showInfo() {
        console.log(`The student id : ${this.id}`);
        console.log(`The student name : ${this.name}`);
        console.log(`The student pass status : ${this.status}`);
    }
}

let student = new Student(1001,"John Smith",true);

student.showInfo();
console.log(student);
