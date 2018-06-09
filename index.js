'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

const cancelAnswer = 'Отменено пользователем!';
const wrongAnswer = 'Доступ запрещен!';
const rightAnswer = 'Добро пожаловать!';

let passwordAnswer;
let loginAnswer;

loginAnswer = prompt('Введите логин:');

if (loginAnswer === null) {
  alert(cancelAnswer);
} else if (loginAnswer !== ADMIN_LOGIN) {
  alert(wrongAnswer);
} else {
  passwordAnswer = prompt('Введите пароль:');
  if (passwordAnswer === null) {
    alert(cancelAnswer);
  } else if (passwordAnswer !== ADMIN_PASSWORD) {
    alert(wrongAnswer);
  } else alert(rightAnswer);
}
