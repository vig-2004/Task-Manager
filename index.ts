console.log("this is TYpescript");

var num:number=30;
console.log(num);

var str:string="hello";
str=10;
console.log(str);

let name:any="vig"
name=10;
name=false;
console.log(name);

function printHello():void{
    console.log("hello");
    return 1;
}
printHello();

// function throwError():never{
//     throw new Error("New Error occurred");
// }
// throwError();

interface User{
    name:string;
    age:number;
    isAdmin:boolean;
}

let user:User={
    name:"vig",
    age:20,
}
console.log(user);

let users:number[]=[1,2,3,4,5];
let userNames:string[]=["vig","sai","kiran"];

users[0]="vig";
userNames[0]=1;
console.log(users);
console.log(userNames);

let arr:[number,string]=[1,"vig"];

let [id,password]=arr;
console.log(id,password);