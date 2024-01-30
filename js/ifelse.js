 console.log('selam');
 
//  const num1 = Number(prompt())
//  const num1 = +prompt()
//  const num2 = 5
//  console.log(num1, typeof num1);
// console.log('toplam:', num1 + num2);

// if(num1 < 0){
//     console.log('negatif');
// }
// else if(num1 > 0) {
//     console.log('pozitif');
// }
// else {
//     console.log("sayi sifir");
// }

const num2 = Number(prompt())
const num3 = Number(prompt())
const num4 = Number(prompt())
///1
// const enBuyuk=Math.max(num2, num3, num4)
// console.log(enBuyuk);
// //2
// if (num2>=num3){
//     if(num2>=num4){
//         console.log("enbuyuk:", num2);
//     }
// }
// if (num3>num4){
//     if(num3>num2){
//         console.log("enbuyuk:", num3);
//     }
// }
// if (num4>num3){
//     if(num4>num2){
//         console.log("enbuyuk:", num4);
//     }10
// }
//3
// if (num2 >= num3 && num2 >= num4){
//     console.log('en buyuk', num2);
// }
// if (num3 >= num2 && num3 >= num4){
//     console.log('en buyuk', num3);
// }
// if (num4 >= num3 && num4 >= num2){
//     console.log('en buyuk', num4);
// }
//4
let enBuyuk = num2
if (num3>enBuyuk){
    enBuyuk = num3
}
if (num4>enBuyuk){
    enBuyuk = num4
}
console.log(enBuyuk);