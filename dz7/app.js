let studentGrades = {
    student: {
        name: 'Введите ваше имя',
        id: 1,
        course: 2
    },
    subjects: ['Math', 'Physics', 'Programming', 'English'],
    grades: {
        'Math': [5, 4, 5, 3],
        'Physics': [4, 4, 3, 5],
        'Programming': [5, 5, 5, 4],
        'English': [4, 3, 4, 4]
    }
};

let subjectToAdd = 'Physics';
let newGrade = 5;

if (studentGrades.grades[subjectToAdd]) {
    studentGrades.grades[subjectToAdd].push(newGrade);
} else {
    console.log('Такого предмета нет');
}
console.log(studentGrades.grades[subjectToAdd]);

let averages = {};
for (let i = 0; i < studentGrades.subjects.length; i++) {
    let subject = studentGrades.subjects[i];
    let gradesArray = studentGrades.grades[subject];
    let sum = 0;

    for (let j = 0; j < gradesArray.length; j++) {
        sum += gradesArray[j];
    }

    let average = sum / gradesArray.length;
    averages[subject] = average;
}

console.log('Средний балл по предметам:');
for (let subj in averages) {
    console.log(subj + ': ' + averages[subj]);
}

let bestSubject = '';
let highestAverage = 0;

for (let i = 0; i < studentGrades.subjects.length; i++) {
    let subject = studentGrades.subjects[i];
    if (averages[subject] > highestAverage) {
        highestAverage = averages[subject];
        bestSubject = subject;
    }
}

console.log('Лучший предмет: ' + bestSubject);

let store = {
    products: [
        { id: 1, name: 'Хлеб', price: 25, category: 'Продукты', stock: 50 },
        { id: 2, name: 'Молоко', price: 60, category: 'Продукты', stock: 30 },
        { id: 3, name: 'Футболка', price: 800, category: 'Одежда', stock: 15 },
        { id: 4, name: 'Джинсы', price: 2500, category: 'Одежда', stock: 8 }
    ],
};
let newProduct = {
    id: 5,
    name: 'Кефир',
    price: 45,
    category: 'Продукты',
    stock: 25
};