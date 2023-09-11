/* 
 ・「JavaScriptのコレクション」値をたくさん持つ。
 ・日：配列 / 英：Array（アレイ）
 ・配列は０始まり。
*/

/* 
let x = [];
x.push(123)
x.pop('3q4');
document.write(x); 
*/

let classes = ['A組', 'B組', 'C組', 'D組'];
for (let grade = 1; grade <= 3; grade++) {
    for(let i = 0; i < classes.length; i++) { // classes.lengthより小さい間ループさせる。
        document.write(`<p>${grade}年${classes[i]}</p>`);
    }

}

let scores = [23, 56, 78, 33, 78, 20, 55, 67, 78];
let maxScore = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
        maxScore = scores[i];
    }
}
document.write(`最高得点は${maxScore}点です<br><br>`);

let pet = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for (let i = 0; i < pet.length; i++) {
    for (let j = 0; j < pet.length; j++) {
        document.write(`${pet[i]}${pet[j]} `)
    }
    document.write(`<br>`);
}