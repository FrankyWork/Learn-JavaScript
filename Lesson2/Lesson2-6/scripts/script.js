'use strict'

// Вывод сообщения через функцию alert
alert('Hello world!');

// Вывод модального окна с инпутом через функцию prompt для получения имени
let name = prompt("What's your name?")
// Вывод сообщения через функцию alert с именем переданным из переменной name
alert(`Hello ${name}`)

// Вывод модального окна с подтверждением введенного имен через функцию confirm
let isResult = confirm(`Are you ${name}?`)
// Вывод сообщения через функцию alert с подтвержденным (true) или не подтвержденным (false) именем
alert(`Name is ${isResult}`)

