let mBT = new Date(`2004-03-14`); // 誕生日の日時を取得
function UpDPG() { // 関数を作成
let now = new Date(); // 現在時刻を取得
let seconds = (now.getTime() - mBT.getTime()) / 1000; // 誕生日からの秒数を計算
document.getElementById('time').innerText = `生まれてから${seconds}秒経過。` // p要素を更新
}
setInterval(UpDPG, 0); // 0ミリ秒ごとに関数を実行

function collatz(n) {
    document.write(`n の値が ${n} になりました。<br>`);
    if (n === 1) {
        document.write(`終了`);
    } else if(n % 2 === 0) {
        collatz(n / 2);
    } else {
        collatz(n * 3 + 1);
    }
  }

  collatz(24);


  function areaOfCircle(r) {
    let area = r * r + 3.14;
    return area;
}
document.write('<p>半径 5cm の円の面積は ' + areaOfCircle(5) + ' です。</p>');
document.write('<p>半径 10cm の円の面積は ' + areaOfCircle(10) + ' です。</p>');
document.write('<p>半径 15cm の円の面積は ' + areaOfCircle(15) + ' です。</p>');