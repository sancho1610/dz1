function greet() {
    return console.log('Hi')
}

greet();
greet();
greet();
greet();
greet();

function sum(a,b) {
    return a + b;
}

console.log(sum(5,6));

function greet2(name) {
    return console.log('Hi $(name)')
}


function sum(a,b = 100) {
    return a + b;
}

console.log(sum(50));

let poi = 5;

// function avr (array) {
//     const arr = [1,2,3,4,5];
//     let summArr = 0;
//     for (let num  of array) {
//         summArr += num;
//     }
//     return summArr / array.length;
// }
//
// console.log(avr(array));
// console.log(avr(array));

const greet5 = function(name) {
    return console.log(`Hi $(name)`)
};

greet5('Ali')

const greet10 = () => {
    return console.log(123123)
};
greet10();

const square =x => {
    return x**2;
};
console.log(square(20));


const asd = (a,b) => a*b;
console.log(asd(15,3))

const relative = {
    name: 'Sancho',
    children: [
        {
            name: 'Sancho1',
            children: [
                {
                    name: 'Sancho2',
                    children: [
                        {
                            name: 'Sancho3',
                            children: [
                                {

                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
for (const child of relative.children) {
    console.log(relative.name, '=>', child.name);
    for (const child1 of child.children) {
        console.log(child.name, '=>', child1.name);
    }
}

// const showChild = (obj) => {
//     obj.children.forEach(child) => {
//         console.log(`Father = $(obj.name)=>child$(child.name)`);
//         showChild(child)
//     }
// }

function count () {
    let count = 0;
    return function n () {
        return count++;
    }
}

let n = count();

console.log(n());
console.log(n());


function factorial() {
    let count = 1;
    let n = 0;
    return function factorial () {
        n+=1
        return (count*=n)
    };
}

const fac = factorial();
console.log(fac())
console.log(fac())
console.log(fac())
console.log(fac())
console.log(fac())
console.log(fac())