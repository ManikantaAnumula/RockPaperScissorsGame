console.log("Hello Practice JS");
"use strict";
const student = {
    fName: "Manikanta",
    lName: "Anumula",
    age: 24,
    get fullNamee() {
        return this.fName + " " + this.lName;
    },
    set lastName(name) {
        this.lName = name;
    },
    fullName: function () {
        return this.fName + " " + this.lName;
    }
};

Object.defineProperty(student, "nationality", {
    value: "Indian",
    writable: true,
    configurable: true,
    enumerable: false
});
Object.defineProperty(student, "age", { value: 25 });


const obj = {
    counter: 0
}
/**
const reset = document.querySelector('#reset');
const increment = document.querySelector('#increment');
const decreement = document.querySelector('#decreement');
const add = document.querySelector('#add');
const userScoreee = document.querySelector('#user-score');

Object.defineProperty(obj,"resett",{
    get : function(){
        this.counter = 0;
    }
})

Object.defineProperty(obj,"incree",{
    get : function(){
        this.counter++;
    }
})

Object.defineProperty(obj,"decree",{
    get : function(){
        this.counter--;
    }
})

Object.defineProperty(obj,"add",{
    set : function(value){
        this.counter+=value;
    }
})

Object.defineProperty(obj,"subract",{
    set : function(value){
        this.counter-=value;
    }
})

userScoreee.innerHTML = obj.counter;
reset.addEventListener("click",()=>{
    obj.resett;
    userScoreee.innerHTML = obj.counter;
});

increment.addEventListener("click",()=>{
    obj.incree;
    userScoreee.innerHTML = obj.counter;
});

decreement.addEventListener("click",()=>{
    obj.decree;
    userScoreee.innerHTML = obj.counter;
});

add.addEventListener("click",()=>{
    obj.add = Number(prompt());
    userScoreee.innerHTML = obj.counter;
});

console.log(obj.counter);
**/

//Object.preventExtensions(student);

//Object.seal(student);

//Object.freeze(student);
//////////////////////////////////////////////////////////

class Person {
    constructor(name, born) {
        this.name = name;
        this.born = born;
    }

    age() {
        const date = new Date();
        console.log("My age is " + (date.getFullYear() - this.born).toString());
    }

    myAge(x) {
        return x - this.born;
    }
}
//////////////////////////////////////////////////////////
class Car {
    constructor(name) {
        this.brandName = name;
    }

    get getcarName() {
        return 'My car is ' + this.brandName;
    }

    set myCarName(name) {
        this.brandName = name;
    }
}

class Customer extends Car {
    constructor(make, model, cust) {
        super(make);
        this.carModel = model;
        this.cust = cust;
    }

    get getcarName() {//This overriden parent method.
        return 'My car is ' + this.brandName + ', ' + this.carModel;
    }

    static greet() {
        return `Greetings!!!`;
    }

    static greetCustomer(x) {
        return `Hello! ` + x.cust;
    }

    showMyCar() {
        return `This ${this.brandName} ` + `is my car.` + ` I bought it in ${this.carModel}.`;
    }
}

const c1 = new Customer("KIA", 2016);
//////////////////////////////////////////////////////////

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    get viewBalance() {
        return `Available Balance ${this.#balance}`;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }
}

const user = new BankAccount();
//////////////////////////////////////////////////////////

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        return `Name : ${this.name} ` + `, Email : ` + this.email;
    }
}

class Student extends User {
    constructor(name, email, roll) {
        super(name, email);
        this._rollNo = roll;
    }

    set rollNo(no) {
        this.rollNo = no;
    }
}

class Teacher extends User {
    constructor(name, email, empid) {
        super(name, email);
        this._employeeId = empid;
    }

    set employeeId(no) {
        this.employeeId = no;
    }
}

const user1 = new User("Manikanta", 'mani@gmail.com');

const stu1 = new Student("Ramesh", "rami@gmail.com");

const emp1 = new Teacher("Nagaraju", "nag@gmail.com");

/////////////////////////setTimeout()/////////////////////////////////

function sayHello() {
    console.log("Hello!");
}

function hello(name) {
    console.log(`Hello ${name}!`);
}

//setTimeout(sayHello, 3000);
//setTimeout(hello, 2000, "Mani");
//////////////////////////////////////////////////////////

/////////////////////////clearTimeout()/////////////////////////////////

function displayMessage() {
    console.log("Here's your message got displayed after 5sec delay.");
}

//let messageTimeout = setTimeout(displayMessage, 5000);

// document.getElementById("cancel").addEventListener("click", function () {
//     clearTimeout(messageTimeout);
//     console.log("Timeout cleared for displayMessage, now message won't display");
// });
//////////////////////////////////////////////////////////

///////////////////////// callback hell /////////////////////////////////

// function getData(dataid, getNextData) {
//     setTimeout(() => {
//         console.log("Data", dataid);
//         if (getNextData) {//This means getNextData is not undefined.
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     console.log("Getting data 2..");
//     getData(2, () => {
//         console.log("Getting data 3..");
//         getData(3, () => {
//             console.log("Getting data 4..");
//             getData(4);
//         })
//     });
// });

////////////////////////// Promises ////////////////////////////////

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Success");
    //reject("Failure");
})

promise.then((res) => {
    console.log("Congratulations", res);
})

promise.catch((err) => {
    console.log("OOPS!!", err);
})

promise.finally(() => {
    console.log("Good Bye");
})
/////////////////////// Promise Chaining ///////////////////////////////////

function getData(dataid) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching Data ${dataid}`);
        setTimeout(() => {
            console.log("Here's your Data", dataid);
            resolve("SUCCESS");
        }, 3000)
    })
}


// getData(1).then((res) => {
//     console.log("Your Request 1 : ", res);
//     getData(2).then((res)=>{
//         console.log("Your Request 2 : ", res);
//         getData(3).then((res)=>{
//             console.log("Your Request 3 : ", res);
//         })
//     })
// })
//Simplifying the above code is called Promise Chaining

//Below is Promise Chaining
// getData(1)
//     .then(() => {
//         return getData(2);//This will return a promise - then using then() below this and continuing same is promise chaining
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         return getData(4);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// prom.catch((err) => {
//     console.log("Your Request : ", err);
// })

//

/////////////////////// Async - Await ///////////////////////////////////

async function getAllData() { //This async function need to be called to execute so we can use IIFE to avoid unwanted calling.
    await getData(1);
    await getData(2);
    await getData(3);
    console.log("Success");
}

// (async function () {//This is IIFE -  Automatically executes and can only be executed once(Can't reuse)
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     console.log("Success");
// })();

//////////////////////////////////////////////////////////

function userData(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data - ", dataid)
            resolve("SUCCESS");
        }, 2000);
    })
}

async function retrieveUserData() { //This async function need to be called to execute so we can use IIFE to avoid unwanted calling.
    await userData(1);
    await userData(2);
    await userData(3);
    console.log("Retrieval Success.");
}

////////////////////////// fetch API ////////////////////////////////

const URL = "https://cat-fact.herokuapp.com/facts"


const getCatFacts = async () => {//Here we used aync-await
    console.log("Retrieving Data....")
    let response1 = await fetch(URL);
    // console.log(response1);
    // let response2 = await fetch(URL);
    // console.log(response2);
    // let response3= await fetch(URL);
    // console.log(response3);
    let json = await response1.json();
    console.log(json[4].text);
}

fetch(URL).then((res) => {//Here we used promise chaining
    console.log("CatFacts API Response is :", res.statusText);
    return res.json();
}).then((res) => {
    console.log(res);
    console.log(`Fact : ${res[0].text}`);
})

////////////////////////////// .then() & .catch() /////////////////////////////////////////////
//.then(fulfilled,rejected) - it takes two arguments
let p = new Promise((res, rej) => {
    let a = true;
    if (a == true) {
        res("Success abc promise");
    } else {
        rej("Error xyz promise");
    }
}
)

// p.then(
//     (resolved) => {//This argumet is executed if a promise is resolved();
//         console.log(resolved);
//     },
//     (rejected) => {//This optional argumet is executed if a promise is rejected();
//         console.log(rejected);
//     }
// );
//Above code handled using .then(fulfilled,rejected) for success and faliure but using .catch for failure/rejected is Better and cleaner way which shown below.

p.then((res) => {
    console.log(res);
}).catch((rej) => {
    console.log(rej);
})

/////////////////////////////////////Form Validation//////////////////////////////////////////////////

const ageSubmit = document.getElementById("submitage");
//ageSubmit.addEventListener("click", validateAge);
const messageElement = document.createElement("p");
const ageformdiv = document.querySelector(".ageform");
const inpObj = document.getElementById("age");
function validateAge() {
    ageformdiv.appendChild(messageElement);
    messageElement.style.marginTop = "1rem";
    if (!inpObj.checkValidity()) {
        messageElement.innerHTML = inpObj.validationMessage;
    } else {
        messageElement.innerHTML = "Input OK";
    }
}

//////////////////////////////////////////////////////////////////////////