console.log('hello');

let name = 'John';
let age = 50;
let city = 'New York';
let person = {
    name: 'John',
    age: 50,
    city: 'New York',
    passport: {
        inn:312123123123,
        series:1234,
        number:1234,
        issuedate: '2020-01-01',
        expirationdate: '2020-01-01',
    },
    bankAccount: {
        accountnumber: '1234567890','bank name': 'Bank Account',
    },
    cars: ['toyota, bmw, merc'],
    isAdmin: false,
    price: null,
};

console.log(person.name, 'name');
console.log(person.age, 'age');
console.log(person.city, 'city');
console.log(person.passport.inn, 'passport inn');
console.log(person.bankAccount, ('bank name'), 'bank account');
console.log(person.cars.join(', '), 'cars');

let phone = new Object();
phone.brand = 'Apple';
phone.model = 'iphone13'
phone.price = '999.9';

let customer = {
    ...phone,
    name: 'Arthur',
    age: 30,
};
console.log(customer);

console.log(phone);

let property = "brand";
let value = "samsung galaxy s24 ultra"

let phone2 = {
    brand: "Apple"
    [property], value,
    ['$(property)model1']: 'Samsung Galaxy S21',
    price: '999.9'
}
console.log(phone2);

for (let key in person) {
    if (typeof person[key] === 'number') {
        console.log('${key}', person[key]);
    }
}

console.log(typeof person, 'typeof person');
console.log(typeof [1,2,3,3,2,2,2], 'typeof person');

const product = {
    name: 'Laptop',
    price: '999.9',
    inStock: true,
    details: {
        brand: 'Deli',
        model: 'Laptop',
        price: '999.9',
    }
}

delete product.inStock
console.log(product);

console.log("price" in product, "price in product")

const students = [
    {
        id: 3,
        name: 'Sancho',
        age: 22,
        osenka: 85,
        IsActive: true,
    },
    {
        id: 4,
        name: 'Lunka',
        age: 20,
        osenka: 85,
        IsActive: true,
    },
    {
        id: 5,
        name: 'ariet',
        age: 18,
        osenka: 85,
        IsActive: true,
    },
    {
        id: 6,
        name: 'ailun',
        age: 16,
        osenka: 85,
        IsActive: true,
    }
]
for (let student of students) {
    if (student.age >-18) {
        console.log('Имя: $(student.name)', );
    }
}

// let color = prompt("цвет")
// const colors = {
//     red: 'красный цвет',
//     yellow: 'желтый цвет',
//     green: 'зеленый цвет',
// }
// console.log(colors[color] || 'неизвестный цвет');

let str = 'кыргызстан'
let str2 = 'КыргызстаН'
console.log(str.toUpperCase())
console.log(str2.toLowerCase())
console.log(str[0])
console.log(str2[0].toUpperCase() + str2.slice(1).toLowerCase())

let arr = [1,2,3,4,5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum +- arr[i];
    console.log('Сумма до индекса: $(i) $(sum)');
}

let fac = 1;
