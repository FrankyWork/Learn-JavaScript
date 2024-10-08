'use strict'

let questionValue = prompt('Введите число', '')

if (Number(questionValue)) {
    alert('Введено не число')
} else if (questionValue > 0) {
    alert(1)
} else if (questionValue < 0){
    alert(-1)
} else {
    alert(0)
}