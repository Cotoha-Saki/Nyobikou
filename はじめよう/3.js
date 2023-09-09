let age = 15;
let result = null;
let isMember = true;
if (age >= 60 && isMember === true) {
    result = 'シニア会員割引対象です。'
} else {
    result = 'シニア会員割引の対象ではありません。'
};

document.write(result);

let number = 3
if (number % 3 === 0) {
    console.log('サァン！');
} else {
    console.log(number)
} 

if (age <= 15) {
    result = '800円';
} else if (isMember){
    result = '1000円'
} else {
    result = '1800円'
}

document.write(result);