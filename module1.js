// 1. Переменные и строгий режим
'use strict';

//let number = 5;  // Изменяема
//const leftBorderWidth = 1;     // Не изменяема
// Точка с запятов после обьявления переменной


// 2. Классификация типов данных

// Простые типы 
// Числа 
//let number = 10;
//console.log(4/0);
//console.log('string' * 10);

// Строка
//const persone = 'Vlad'; // Строка в кавычках

//Логический тип данных (булин)
//const bool = true; // Либо Тру либо Фолс

// Null
//console.log(something); // null - ошибка ссылочного типа(нету на что ссылаться)

//Undefined
//let und;
//console.log(und); //коробка в которой пусто


//Обьекты
// const obj = {
//    name: 'Vlad',
//    age: 20
// };

// массивы []
// let arr = ["1", '2', '3'];


// 3. Простое общение с пользователем

// alert("Hello World");

// const result = confirm("Are you here?");

// const answer = prompt("Вам есть 18?", "");  //Если +prompt то выйдет число а не строка
// console.log(typeof(answer));     //typeof - проверяет какой тип данных

// const answers = [];
// answers[0] = prompt('Как ваше имя?');
// answers[1] = prompt('Сколько вам лет?');
// answers[2] = prompt('Где проживаете?');
// console.log(typeof(answers)); // тип данных обьект
// document.write(answers);

//Если вывести через тайпоф null он будет как обьект, признанная ошибка



//4. Интерполяция (ES6)

// const category = 'toys';
// console.log(`https//someurl.com/${category}/5`);

// const name = 'Vlad';
// alert(`hello ${name}`);


//5. Операторы JS

// Строка + строка = строка
// Строка + число = строка

// console.log('arr' + ' - object');
// console.log(4 + ' - object');
// console.log(4 + +(' - object')); // ПОлучаем NAN если + прям перед дужкой
// УНАРНЫЙ + это плюс который ставится непосредственно перед чем то

//Инкримент Декримент
// let incr = 10,
//     decr = 10;

// incr++; //Постфиксная форма
// decr--;

// ++incr; //Префиксная форма записи
// --decr;

// console.log(incr);
// console.log(decr); 

// console.log(++incr); // Есть разница
// console.log(incr++);

// && //- И - работает когда 2 и больше правдивыз значения 
// || // - Или - работает когда один из варинатов правдивый


// 6. Условия

// if (8 == 9) {
//     console.log('ok!');
// } else {
//     console.log('error');
// }

// const num = 50;

// if  (num < 49) {
//     console.log(error);
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ок!');
// }

//Тирнарный оператор (частый вопрос на собеседовании) три аргумента 
// (num === 50) ? console.log('ok') : console.log('error');

// const num = 50;

// switch (num) {
//     case 49:   
//         console.log('Нет');
//         break;
//      case 50:
//         console.log('Да');
//         break;
//     default: 
//         console.log('Не в этот раз');
// }


// 7. Циклы

//1.Способ
// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

//2. Способ
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

//3. Способ
// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 8; i++) {
//     if (i === 5) {
//         continue;
//         // break;
//     }
//         console.log(i);  
// }   


// 8. Функции 

// function showFirstMessage() {
//     console.log('Hello world!');
// }
// showFirstMessage();


// function showGetName(name) {
//     console.log(name);
// }
// showGetName("Vlad");

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 5));
// console.log(calc(10, 5));
// console.log(calc(7, 8));


// function ret() {
//     let num =50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);


// let logger = function() {
//     console.log('Hello');
// };
// logger();


// const calc = (a, b) => a + b;
// console.log(calc(10, 5));
// console.log(calc(9, 8));


// 9. Методы и свойства чисел и строк
// const str = 'Vlad';

// // console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// console.log(str);


// const fruit = 'Some fruit';
// console.log(fruit.indexOf('i'));

// Методы с изменением строки
 
// const logg = 'My name is Vlad';
// console.log(logg.slice(2, 7));
// console.log(logg.substring(2, 7));
// console.log(logg.substr(0, 2));

// С числами
// const num = 10.4;
// console.log(Math.round(num));

// const test = '12.2px';
// // console.log(parseInt(test));
// console.log(parseFloat(test));



// 10. CallBack Функции

// function learnJS (lang, CallBack) {
//     console.log(`Я учу: ${lang}`);
//     CallBack();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJS('java script', done);


// 11.Объекты, деструктуризация объектов (ES6)

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();
// const {border, bg} = options.colors;
// console.log(border);
// console.log(options.colors.border);

// delete options.name; 
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         } 
//     }  else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     } 
// }
// console.log(counter);


// 12.Массивы и псевдомассивы

// const arr = [0, 2, 4, 6, 8];

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(",");
// products.sort();
// console.log(products.join('; '));


// 13. Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);

// const obj = {
//     a: 5,
//     b: 1 
// };

// // const copy = obj;x // Ссылку
// // copy.a = 10;
// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {      // ОБЯЗАТЕЛЬНО ПРОПИСЫВАТЬ
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }


// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);


// const add ={
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));


// const video = ['youtube', 'vimeo', 'rutube'],
//         blogs = ['wordpress', 'livejournal', 'blogger'],
//         internet = [...video, ...blogs, 'vk'];

// console.log(internet);


// const array = ['a', 'b'];
// const Aaray = [...array];
// console.log(Aaray);


// 14.Основы ООП, прототипно-ориентированное наследование

// const soldier = {
//     health: 400,
//     armor: 100
// };

// const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

// Object.setPrototypeOf(jonh, soldier); //В динамике



// 14.Динамическая типизация в JS

// To string 
//1
// console.log(typeof(String(null)));

// //2
// console.log(typeof(5 + ''));

// const num = 5;
// console.log("https://vk.com/catalog/" + num);

// To number
// 1
// console.log(typeof(Number("lala")));
// console.log(typeof(Number(null)));

//2
// console.log(typeof(+null)); // Унарный ПЛЮС

//3
// console.log(typeof(parseInt("15px", 10)));

// let answer = +prompt("Hello", "");  

//  To boolean
// 0, '' null, undefined, NaN

// 1
// let  switcher = null;
// if (switcher) {
//     console.log("Working...");
// } 

// switcher = 1;
// if (switcher) {
//     console.log("Working...");
// } 


//2
// console.log(typeof(Boolean(5)));

//3
// console.log(typeof(!!"lala"));


//15

// Какое будет выведено значение: 
// let x = 5; alert( x++ ); // 5

// // Чему равно такое выражение: 
// [ ] + false - null + true  //Nan

// // Что выведет этот код: 
// let y = 1; let x = y = 2; alert(x);//2 

// // Чему равна сумма 
// [ ] + 1 + 2 //12 (Сложение строк)

// // Что выведет этот код: 
// alert( "1"[0] ) //1

// // Чему равно 
// 2 && 1 && null && 0 && undefined // null (оператор И останавливается на false)(Оператор ИЛИ на True)

// // Есть ли разница между выражениями? //false
// !!( a && b ) и (a && b);

// // Что выведет этот код: 
// alert( null || 2 && 3 || 4 ); // 3

// a = [1, 2, 3]; b = [1, 2, 3]; //false
// //Правда ли что a == b ?

// // Что выведет этот код: 
// alert( +"Infinity" ); //infinity (number)

// // Верно ли сравнение: 
// "Ёжик" > "яблоко"? // false

// // Чему равно
//  0 || "" || 2 || undefined || true || falsе // 2


//16. Действия с элементами на странице

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circles'),
//       hearts = document.querySelectorAll('heart'),
//       oneHeart = document.querySelector('.heart'),
//       wrapper = document.querySelector('.wrapper');

// const div = document.createElement('div');

// div.classList.add('black');

// document.body.append(div); // Вставить в конец
// wrapper.prepend(div);  // вставить в начало

// hearts[0].before(div); // Вставить перед
// hearts[1].after(div); // Вставить после

// circles[0].remove(); // Удалить 

// hearts[0].replaceWith(circles[0]); // Заменить сначала како элемент заменить потом каким 

// div.innerHTML = '<h1>Hello world</h1>';

// div.textContent = 'Hello'; //Только с текстом

// div.insertAdjacentHTML('', "<h2>hello</h2>");


// 17. Событие и их обработчики

// const btns = document.querySelectorAll('button');
//       overlay = document.querySelector('.overlay');


// // btn.onclick = function() { // Нельзя использовать, нужно заменить
// //     alert('Click'); 
// // };

// // btn.addEventListener('click', () => {
// //     alert('Click');
// // });

// // btn.addEventListener('click', () => {
// //     alert('second click');
// // });


// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     // i++;
//     // if (i == 1) {
//     //     btn.removeEventListener('click', deleteElement);
//     // }
// };

// // btn.addEventListener('click', deleteElement);
// // overlay.addEventListener('click', deleteElement);

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement, {once: true});
// });

// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);
// });


//18. Навигация по DOM - элементам, data-атрибуты, преимущество for/of

// Отталкиваемся от родителя
// console.log(document.body); 
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);


// console.log(document.querySelector('#current').parentNode.parentNode); // Родитель ноды
// console.log(document.querySelector('#current').parentElemente); // Родитель элемента


// console.log(document.querySelector('[data-current="3"]').nextSibling); // Узел после 
// console.log(document.querySelector('[data-current="3"]').previousSibling); // Узел перед

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // Элемент после
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // Элемент перед

// Перебор с помощью for of
// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node);
// }


// 18. События на мобильных устройствах

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log('start');
//         // console.log(e.touches);
//         // console.log(e.targetTouches);
//         console.log(e.changedTouches);
//     });
    
//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         // console.log('move');
//         console.log(e.targetTouches[0].pageX);
//     });
    
//     // box.addEventListener('touchend', (e) => {
//     //     e.preventDefault();

//     //     console.log('end');
//     // });
// });

// // touches // Список всех пальцев которые взаимодействуют с экраном
// // targetTouches // Список пальцев которые взаимодействуют именно с этим элементом
// // changedTouches // Список пальцев которые учавствуют в текущем событии


// 19. Async, defer, динамические скрипты

// использование defer перед src в скрипте загружает все по порядку, загрузка скрипта идет в фоновом режиме
// const p = document.querySelectorAll('p');
// console.log(p);

// // Использование async - не ждет асинхронных скриптов 
// //                       событие через DOM и этот, не ждут друг друга
// //                       Загрузка так же в фоновом режиме но запускается тогда когда он уже загружен никого не ждет

// // Когда используем async мы должны уверены быть что скрипт не зависит от структуры

// // const script = document.createElement('script');
// // script.src = 'test.js';
// // script.async = false; // Скрипт будет работать так же как и в html структуре
// // document.body.append(script);

// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false; // Скрипт будет работать так же как и в html структуре
//     document.body.append(script);
// }

// loadScript('test.js');
// loadScript('some.js');