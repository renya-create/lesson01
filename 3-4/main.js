
//文字列にする
const num1=String(process.argv[2]);
const num2=String(process.argv[3]);

//文字列を1文字ずつ配列にする
const arr1=num1.split("");
const arr2=num2.split("");

//配列の並びを逆にして、配列をつなげる
const rev1=arr1.reverse().join("");
const rev2=arr2.reverse().join("");

//文字列→数値
const a=Number(rev1);
const b=Number(rev2);

console.log(a+b);

