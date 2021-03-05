'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
/* 
コマンドライン引数 node jsファイル名 値A ... というコマンドの書き方でnode.jsを実行すると、値Aをプログラムの中で使える。
let 変数名 = A || B みたいに論理和を使って変数を作ることができる。AがFalsyな値だと、Bが代入されAがTruesyば値だとAが代入される。

*/