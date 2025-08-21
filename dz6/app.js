let fruits = ['яблоко', 'банан', 'апельсин', 'груша', 'киви'];
fruits.push("манго")
fruits.unshift("ананас")
fruits.pop()
fruits.shift()
console.log(fruits)
console.log(fruits.indexOf("апельсин"));
console.log(fruits.includes('виноград'));
console.log(fruits.length)

let numbers = [15, 8, 23, 42, 4, 16, 9, 31];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.slice(0, 4));
console.log(numbers.slice(-3));
console.log(numbers.join(','));

let mixedArray1 = [12, 'hello', 25, true, 8, 'world', 33, false, 7];
for (let i = 0; i < mixedArray1.length; i++) {
    if (mixedArray1[i] === mixedArray1[i]) {
        console.log(mixedArray1[i]);
    }
}
let mixedArray = [12, 'hello', 25, true, 8, 'world', 33, false, 7];
for (let i = 0; i < mixedArray.length; i++) {
    if (mixedArray[i].toString()=== mixedArray[i]) {
        console.log(mixedArray[i]);
    }
}