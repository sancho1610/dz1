console.log("Hello app.js");

let customer = "John";
console.log(customer);
let Customer = "Customer John";
console.log(Customer);
let customerName = "Sancho";
console.log(customerName);
let customer_name = "Sanchik";
console.log(customer_name);
let $ = 12;
let $name = "John";
let $num12 = "12"
let age = "14"

console.log("имя=",customerName, age)
console.log("имя=",customerName + "возраст=" + age)
console.log(`имя=${customerName} возраст= ${age}`)
console.log (customerName, "customerName");

let number = 12;

console.log(number, "number");
number=21
console.log(number, "number");

console.log(typeof customerName, "typeof customerName");
console.log(typeof number, ("typeof number"));

let pi = 3.14

console.log(pi, "pi");
console.log(typeof pi, "typeof number");

let a = 10;
let b = 5;

console.log(a+b, 'a+b');
console.log(a-b, 'a-b');
console.log(a*b, 'a*b');
console.log(a/b, 'a/b');
console.log(a%b, 'a%b');
console.log(a**b, 'a**b');

console.log(16%2 , 'четное');
console.log(27%2 , 'не четное');

console.log("2" * 5)
console.log(2 * "5")
console.log(2 * "5")
console.log(2 * "asdfghj");
console.log("10" * "500сом");
console.log("15" + 200)
console.log(15 + "200")
console.log(45/0);
console.log(45/0 + 12312312);
console.log(0/45);

console.log('a=',a,'b=',b);
console.log(a > b, 'a>b');
console.log(a < b, 'a<b');
console.log(a >= b,'a>=b');
console.log(a <= b, 'a<=b');
console.log(a == b, 'a==b');
console.log(a =! b, 'a!=b');
console.log(a === b, 'a===b');
console.log(a !== b, 'a===b');
console.log(true, 'true');
console.log(false, 'false');
console.log(true, '!false =true');

console.log(true && true);
console.log(true && true && true && true && false);

console.log(false || false || true);

console.log((true || false) && true);
console.log((false || false) && true);

let isAdmin = true;
let isSuperAdmin = false;
let isStudent = false;
let isEdit = true;

console.log((!isAdmin || isSuperAdmin) && isEdit);
console.log(!isStudent && isEdit);

let c =15;
let d =10;

if (c>d) {
    console.log('c > 5')
} else if (c > 5){
    console.log('c > 5');
}
else {
    console.log("false")
}

let age1 = prompt('Введите возраст')
console.log(age1);
if (age1 >= 1000) {
    console.log('вы бессмертный');
} else if (age1>18 || age1 == 18) {
    console.log('Вы соверщенолетний')
} else if (age1>=0) {
    console.log('Вы не совершеннолетний')
} else  {
    console.log("Вы неправильно ввели возраст")
}