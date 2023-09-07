/* コレクションとは、値などの要素の集まりのこと
　　配列は、複数の並んだ要素に対して「添字」と呼ばれる整数の番号を使い、中身を取り出すことができる
　　JavaScriptで配列は、Array（アレイ）と呼ぶ 。

　　['A組', 'B組', 'C組', 'D組'];　のように表現する。
　　let classes = ['A組', 'B組', 'C組', 'D組'];　変数に代入することもできる。
*/

//配列の要素へのアクセス
const testArray = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
  console.log(testArray[i]);
}

/*
　　配の長さは「.length（レングス）」を用して取得できる。
　　「　console.log([1, 2, 3, 4, 5].length);     // --> 5　」

　　配列への要素の追加は「.pushを用いる」
　　「let teatArray = [];                // [] は空の配列
　　　testArray.push('cat');
　　　console.log(testArray);            // ['cat']
　　　testArray.push('dog');
　　　console.log(testArray);            // ['cat', 'dog']」

　　配列から要素を削除するには「.splice（スプライス）」
　　　「let testArray = [1, 2, 3, 4, 5];

　　　　// 1 番目を先頭として、要素を 1 つ削除する
　　　　testArray.splice(1, 1);    // 実は [2] を返している
　　　　console.log(testArray);    // [1, 3, 4, 5]

　　　　// 2 番目を先頭として、要素を 2 つ削除する
　　　　testArray.splice(2, 2);    // 実は [4, 5] を返している
　　　　console.log(testArray);    // [1, 3]」

　　配列の要素を検索するには「.findIndexを用いる」
　　　「let testArray = [1, 2, 3, 4, 5];

　　　　// 3 以上の要素が含まれているか
　　　　console.log(testArray.findIndex(n => 3 <= n));   // 2（最初のものだけが返ってくる）

　　　　// 5 が含まれているか
　　　　console.log(testArray.findIndex(n => n === 5));  // 4

　　　　// 負の数が含まれているか
　　　　console.log(testArray.findIndex(n => n < 0));    // -1」

　　並列から条件を満たすものを抽出するには「.filter」
　　　　「let testArray = [1, 2, 3, 4, 5];

　　　　// 3 以上の要素だけ抽出する
　　　　console.log(testArray.filter(n => 3 <= n));        // [3, 4, 5]

　　　　// 偶数だけ抽出する
　　　　console.log(testArray.filter(n => n % 2 === 0));   // [2, 4]」

　　配列すべての要素に対してある操作をするには「.map」を用いる
　　　・Mapとは、連想配列のこと key, value のペアで情報を持ち key を指定すると valueを返してくれる。
　　　　「let testArray = [1, 2, 3, 4, 5];

　　　　// すべてに 100 を足す
 　　　　console.log(testArray.map(n => n + 100));       // [101, 102, 103, 104, 105]

　　　　// すべて文字列型に変換する
　　　　console.log(testArray.map(n => n.toString()));  // ['1', '2', '3', '4', '5']」
*/