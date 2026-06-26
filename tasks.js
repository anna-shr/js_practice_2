//1. Каталог товаров

let items = [
    { name: "Мяч", price: 100, category: "Игрушка" },
    { name: "Пирамидка", price: 200, category: "Игрушка" },
    { name: "Шорты", price: 300, category: "Одежда" },
    { name: "Футболка", price: 400, category: "Одежда" },
]

function getTotalPriceByCategory(category) {
    let totalPrice = 0;
    for (let item of items) {
        if (item.category.toLowerCase() == category.toLowerCase()) totalPrice += item.price
    }
    return totalPrice;
}


// //2. Список пользователей

let users = [
    { id: "111", name: "Вася", email: "vasya@mail.ru" },
    { id: "222", name: "Петя", email: "petya@mail.ru" },
    { id: "333", name: "Коля", email: "kolya@mail.ru" },
    { id: "444", name: "Аня", email: "anya@mail.ru" },
]

function findUserById(users, id) {
    let ids = [];
    for (let user of users) {
        ids.push(user.id);
        if (user.id == id) return user;
    }
    if (!ids.includes(id)) return null;
}


//3. Библиотека книг

let books = [
    { title: "Сумерки", author: "Стефани Майер", genres: ["романтика", "драма", "фантастика"], isRead: true },
    { title: "Война и мир", author: "Лев Толстой", genres: ["роман", "драма", "история"], isRead: false },
    { title: "Звездный десант", author: "Роберт Хайнлайн", genres: ["роман", "фантастика"], isRead: true },
    { title: "Ещё один детектив", author: "Дарья Донцова", genres: ["детектив"], isRead: false },
]

function getBooksByGenre(genre) {
    let selectedBooks = [];
    for (let book of books) {
        for (let bookGenre of book.genres) {
            if (bookGenre == genre) selectedBooks.push(book);
        }
    }
    return selectedBooks;

}

function markAsRead(title) {
    for (let book of books) {
        if (book.title == title) book.isRead = true;
    }
}


//4. Поиск в дереве категорий

const categories = {
    name: "Electronics",
    subcategories: [
        {
            name: "Phones",
            subcategories: [
                { name: "Smartphones", subcategories: [] },
                { name: "Feature Phones", subcategories: [] }
            ]
        },
        {
            name: "Computers",
            subcategories: [
                { name: "Laptops", subcategories: [] },
                { name: "Desktops", subcategories: [] }
            ]
        }
    ]
}

function findCategory(name, tree) {
    if (tree.name == name) return tree;
    if (tree.subcategories) {
        for (let subcategory of tree.subcategories) {
            return findCategory(name, subcategory)
        }
    }
    return null;
}


//5. Копирование объекта

const original = {
    name: "Alice",
    settings: {
        theme: "dark",
        languages: ["en", "ru"]
    }
};

function deepClone(obj) {
    return structuredClone(obj);
}


//6. Что будет в консоли #1

let count = 10;

function increase() {
  let count = 0;
  count += 1;
  return count;
}

console.log(increase()); // 1
console.log(count); // 10


//7. Что будет в консоли #2

let message = "Hello";

function changeMessage() {
  message = "Hi";
}

changeMessage();
console.log(message); // "Hi"


//8. Что будет в консоли #3

function outer() {
  let outerVar = "I am outside!";
  
  function inner() {
    console.log(outerVar);
  }
  
  return inner;
}

let outerVar = 'Inside';

const func = outer();
func(); // "I am outside!"


//9. Что будет в консоли #4

a = 10;

function f() {
    console.log(a); //20
}

a = 20;

f();


//10. Преобразовать массив в объект

const array = [
    { name: 'width', value: 123 },
    { name: 'height', value: 222 }
];

let obj = {}

for (let elem of arr) {
    obj[elem.name] = elem.value
}


//11. Подсчёт количества товаров по категориям

const products = [
    { name: "Phone", category: "Electronics" },
    { name: "TV", category: "Electronics" },
    { name: "Jeans", category: "Clothing" },
    { name: "T-shirt", category: "Clothing" },
    { name: "Blender", category: "Home" }
];

function countByCategory(products) {
    let categories = {};
    for (let item of products) {
        if (!(item.category in categories)) {
            categories[item.category] = 1;
        } else {
            categories[item.category]++;
        }
    }
    return categories;
}


//12. Сумма всех значений объекта

const salaries = {
    Alice: 500,
    Bob: 700,
    Charlie: 300
};

function getTotalSalary(obj) {
    let totalSum = 0;
    Object.values(obj).forEach(value => {
        totalSum += value;
    });
    return totalSum;
}


//13. Counter

function counter(n) {
    let innerCounter = n;
    return function() {
        return innerCounter++;
    }
}

let copy = counter(n)
console.log(copy());
console.log(copy());
console.log(copy());


//14. Flat

//рекурсия
function flat(arr, depth = 1) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i in arr) {
            const item = arr[i];
            if (Array.isArray(item) && depth > 0) {
                result.push(...flat(item, depth - 1));
            } else {
                result.push(item);
            }
        }
    }
    return result;
}

//цикл
function flat(arr, depth = 1) {
    let result = [];
    let stack = arr.map(item => ({ item, depth }));
    
    while (stack.length) {
        const { item, depth: d } = stack.pop();
        if (Array.isArray(item) && d > 0) {
            stack.push(...item.map(sub => ({ item: sub, depth: d - 1 })));
        } else {
            result.unshift(item);
        }
    }
    return result;
}


