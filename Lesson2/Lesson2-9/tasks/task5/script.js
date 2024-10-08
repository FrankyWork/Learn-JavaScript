'use strict'

// let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

let questionLoginValue = prompt('Введите свою должность', '')

let message =
    questionLoginValue == "Сотрудник" ?
        "Привет" : questionLoginValue == "Директор" ?
            "Здравствуйте" : questionLoginValue == '' ?
                " Нет логина" : '';

alert(message)