/* let age = 16;
let result = null;
if (age >= 18) {
    result = '成年'
} else {
    result = '未成年'
}
document.write(result); */

/* let age = 65;
let isMember = true;
let result = null;
if (age >= 60 && isMember) {
    result = 'シニア会員割引の対象です。'
} else {
    result = 'シニア会員割引の対象ではありません。'
}

document.write(result); */

/* let number = 3;
if (number == 3) {
    document.write('サァン！');
} else {
    document.write(number);
} */

let age = 15; //変数ageに15を代入
let isMember = true;//変数isMemberにnullを代入
let result = null;//変数resultにnullを代入
if (age <= 15)  { 
    result = 800; //15歳以下の場合
} else if (isMember){
    result = 1000;//15歳以上かつ会員の場合
} else {
    result = 1800;//15歳以上かつ非会員の場合
}
document.write(result);//値段を表示させる