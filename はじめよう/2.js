/* let before = 100000; // 10年後にいくら増えたか確認
let mul = 1.06 ** 10; // 6%金利
let after = before * mul; // 合計金額の計算
let answer = after - before; // いくら増えたかの計算
document.write(`10年間で増えたお金の総額は${answer}です`); */

let price = 290;
let price2 = price * 1.1;
document.write(`金額が${price}円の税込価格は${price2}円です`);