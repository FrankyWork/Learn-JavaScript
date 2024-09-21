// Строгий режим
'use strict'

// Объявляем переменную с именем «message»:
let message;

// Определяем переменную используя оператор присваивания =
message = 'Hello World'

/*
    Для краткости можно совместить объявление переменной и запись данных в одну строку:
    let message = 'Hello World';
*/

/*
    Мы также можем объявить несколько переменных в одной строке:
    Вариант-1:
    let user = 'John', age = 25, message = 'Hello';

    Вариант-2:
    let user = 'John';
    let age = 25;
    let message = 'Hello';

    Вариант-3:
    let user = 'John',
      age = 25,
      message = 'Hello';
*/

/*
    Строка сохраняется в области памяти, связанной с переменной.
    Мы можем получить к ней доступ, используя имя переменной:
*/

alert(message)

// Обвявляем переменную
let animal = 'dog'

// Обвявляем переменную
let pes;

// Инициализируем переменную pes как animal
pes = animal;

alert('Инициализируем переменную pes как animal: ' + pes)

/*
    Переопределение переменной работает через
    Работает:
    let message;

    message = 'Hello!';

    message = 'World!'; // значение изменено

    alert(message);

    Не работает т.к. в данном примере мы заново объявляем переменную:

    let message = 'Hello!';

    let message = 'Goodbye!';

    alert(message)

*/

// Объявляем и инициализируем НЕИЗМЕНЯЕМУЮ ПЕРЕМЕННУЮ - константу

const myName = 'Dany';

alert('const myName: ' + myName)