'use strict';


// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// // console.log(btns[0].classList.length);
// // console.log(btns[0].classList.item(1));
// // console.log(btns[1].classList.add('red'));
// // console.log(btns[0].classList.remove('some'));
// // console.log(btns[0].classList.toggle('some'));

// // if (btns[1].classList.contains('red')) {
// //     console.log('red');
// // }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

// // wrapper.addEventListener('click', (event) => {
// //     if (event.target && event.target.tagName == 'BUTTON') {
// //         console.log('hello');
// //     }  
// // });

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.matches('button.red')) {
//         console.log('hello');
//     }  
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);


// 2.Работа с датами 

// const now = new Date();

// console.log(now.setHours(18));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());



// 3. Функции-конструкторы

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const vlad = new User('Vlad', 20);
// const vadim = new User('Vadim', 27);

// vlad.exit();

// vlad.hello();
// vadim.hello();

// console.log(vlad);
// console.log(vadim);



// 4. Контекст вызова. This

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 6);

// const obj = {
//     a: 10,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// let vlad = new User('Vlad', 20);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Vlad'
// };

// sayName.call(user, 'Gskiy');
// sayName.apply(user, ['Gskiy']);

// function name(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(55));

//1. Обычная функция: this = window, Но если us strict (строгий режим) то undefined
//2. Контекст у методов обьекта - сам обьект
//3. This в конструкторах и классах - это новый экземпляр обьекта 
//4. Ручная привязка this: call, apply, bind


//5. Классы (ES6)

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }


// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 5, "llll", 'red');

// div.showMyProps();
// console.log(div.calcArea());


// const aquare = new Rectangle(10, 10);

// console.log(aquare.calcArea());


//6. Rest оператор и параметры по умолчанию (ES6)

// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// };

// log('basic', 'rest', 'operetor', 'usage');

// function calcOrDouble(number, basis = 2) {
//     console.log(number * basis);
// }

// calcOrDouble(3);


// 7. Промисы

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных');
    
//         const product = {
//             name: 'TV',
//             priseЙ: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data =>  {
//     console.log(data);
// }); 


// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// // test(2000).then(() => console.log('2000 ms'));
// // test(2000).then(() => console.log('3000 ms'));

// // Promise.all([test(2000), test(2000)]).then(() => {
// //     console.log('all');
// // });

// Promise.race([test(2000), test(2000)]).then(() => {
//     console.log('all');
// });


// 8. Методы перебора массивов

// 1.filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemort'];

// const shortNames = names.filter((name) => {
//     return name.length < 5;
// });

// console.log(shortNames);


// 2.map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());
// console.log(result);


// 3.every/some

// const some = [5, "dsfsd", "6655"];

// // console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));


// 4.reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);



//9.  Как сохранить данные без БД. Работа с localStorage

// localStorage.setItem('number', 10);

// // localStorage.getItem('number');
// console.log(localStorage.getItem('number'));

// localStorage.removeItem('number');

// localStorage.clear();


// 10. Регулярные выражения

// new RegExp('pattern', 'flags'); //классический пример

// /pattern/flags // новый вариант

// const ans = prompt('Введите ваше имя');

// const reg = /n/;

// классы - Если использовать большие буквы это значит что 'Не' чтото там
// \d - ищем цыфры 
// \w - слова, буквы
// \s - спейс, пробелы 

// // флаги: i - в не зависимостри от регистра
// //        g - несколько вхождений
// //        m - многострочный режим

// // console.log(ans.search(reg));
// console.log(ans.match(reg));

// console.log('15:2:6'.replace(/:/g,'-'));


//10. Геттеры и сеттеры (свойства объектов)

// const persone = {
//     name: 'Alex',
//     age: 25,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// };

// console.log(persone.userAge = 30);
// console.log(persone.userAge);


//11. Инкапсуляция

// 'use strict';

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surname = 'Petrychenko';

//     say = () => {
//         console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     }
// }

// const ivan = new User('Ivan', 27);



//10. ES6 Modules

// export let one = 1;

// let two = 2;
// export  {two};

// //Синтаксис получения
// import {one, two} from './main';


//11. Ошибки. Как избежать “поломки” своего кода

// try {
//     console.log('Normal');
// } catch(error) {
//     console.log(error);
// }


// 12. Функции генераторы 

// function* generator() {
//     yield 'V';
//     yield 'l';
//     yield 'a';
//     yield 'd';
// };

// const str = generator();

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());


// function* count(n) {
//     for(let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);