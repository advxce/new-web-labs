let date = new Date();
let firstMon = +date.getMonth() - 1;
let secondMon = +date.getMonth();
let thirdMon = +date.getMonth() + 1;

console.log(firstMon);
console.log(secondMon);
console.log(thirdMon);
let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
for (let i = 0; i < month.length; i++) {
    if (secondMon == i) {
        console.log(month[i - 1]);
        console.log(month[i]);
        console.log(month[i + 1]);
    }
}
let yearBur = prompt("Введите год рождения");
let burth = new Date(yearBur);
console.log(burth);
let find = date.getFullYear() - burth.getFullYear();
console.log(find);
let startTime;
let endTime;
let end = document.querySelector("#end");
let start = document.querySelector("#start");
start.addEventListener("click", () => {
    startTime = Date.now();
    console.log(startTime);
    window.startTime = startTime;
});
end.addEventListener("click", () => {
    endTime = Date.now();
    let otn = endTime - startTime;
    console.log(otn);
});
// function startTime(){
//     startTime = Date.now();
//     //console.log(startTime);
//     window.startTime = startTime;
//
console.log(startTime);

let x1 = prompt("Введите первую вершину х:");
let y1 = prompt("Введите первую вершину у:");
let x2 = prompt("Введите вторую вершину х:");
let y2 = prompt("Введите вторую вершину у:");
let distance = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
console.log(distance);

let stroka = prompt("Введите строку:");
console.log(stroka.toUpperCase());

let numberInt = prompt("Введите число");
let num = new Number([numberInt]);
console.log(num);

function isOdd(num) {
    if (+num % 2 == 1) {
        console.log("true");
        return true;
    }
}
isOdd(+num);

let regExp = new RegExp("hi");
console.log(regExp);
let string = "nngnfjgjg";

let mass = string.split("");
console.log(mass);
if (mass[0] >= "0" && mass[0] <= "9") {
    console.log("true");
} else {
    console.log("false");
}

let symbol = prompt("Введите символ, который хотите проверять");
let testString = "abcdefghjklmo";
let massStr = testString.split("");

function findSymbol(symbol) {
    if (symbol == massStr[0]) {
        console.log("Предложение начинается с символа: " + symbol);
    } else {
        console.log("Предложение начинается с другого символа");
    }
}
findSymbol(symbol);