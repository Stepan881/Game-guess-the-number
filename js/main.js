"use strict";

let isNumber = function(n) {
  if (isNaN(n)) {
    alert('введите число');
    return false;
  }
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandom = function (max) {
  return Math.round(1 + Math.random() * (max - 1));
};

let num = 50;
let max = 100;
let min = 0;
let attempts = 10;
let randomNum = getRandom(100);
alert('Игра "угадай число от 1 до 100 с 10 попыток"');


function prog(randomNum, attempts) {
  console.log(randomNum);
  if (attempts !== 0) {
    do {
      num = Math.ceil(+prompt(`Введите число от ${min}  до ${max}`, max));
    }
    while(!isNumber(num));
  
    if (num > randomNum) {
      alert(`Загаданное число меньше ${num}, осталось попыток: ${attempts}`);
      max = Math.ceil(num);
    } else if (num < randomNum) {
      alert(`Загаданное число больше ${num}, осталось попыток: ${attempts}`);
      min = Math.ceil(num);
    } else if (num === randomNum) {
      let gameStart = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      gameFinish(gameStart);
      return;
    }

    attempts--;
  } else {
    let gameStart = confirm(`Попытки закончились! Загаданное число: ${randomNum}. Xотите сыграть еще?`);
    gameFinish(gameStart);
    return;
  }

  prog(randomNum, attempts);

  return function() {
    attempts;
    randomNum;
  };
};

let gameFinish = (gameStart) => {
  if (gameStart) {
    num = 50;
    max = 100;
    min = 0;
    randomNum = getRandom(100);
    attempts = 10;
 
    prog(randomNum, attempts);
  } else {
    alert(`Пока`);
    return;
  }
};


const prog2 = prog(randomNum, attempts);


console.dir(prog2);
