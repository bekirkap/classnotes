//  console.log('selam');
 
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

// const num2 = Number(prompt())
// const num3 = Number(prompt())
// const num4 = Number(prompt())
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
// let enBuyuk = num2
// if (num3>enBuyuk){
//     enBuyuk = num3
// }
// if (num4>enBuyuk){
//     enBuyuk = num4
// }
// console.log(enBuyuk);


//switch case

// const sayi1 = +prompt('sayi1')
// const sayi2 = +prompt('sayi2')
// const islem = prompt("islem giriniz +,-,*,/")
// let sonuc = 0

// switch(islem){
//     case '+' :
//         sonuc = sayi1+sayi2
//         break
//     case '-' :
//         sonuc = sayi1-sayi2
//         break
//     case '*' :
//         sonuc = sayi1*sayi2
//         break
//     case '/' :
//         sonuc = sayi1/sayi2
//         break
//         default:
//             alert('yanlis islem')
//             break
// }
// console.log(`${sayi1} ${islem} ${sayi2} = ${sonuc}`);


// let mycar = 'my car is yellow';

// function aname(){
//     let mycar = 'my car is red'
//     console.log(mycar);
 
// }
// aname(mycar);
// console.log(mycar);

// let num = 4

// function evennumber(num){
//     if((num%2) == 0){
//         return `${num} is even`;
//     }
//     else{
//         return `${num} is odd`;
//     }
// }
// console.log(evennumber(5));

// for (let i = 0; i<=10; i++){

//     console.log(i);
//     if(i == 5){
//         return;
//     }

// }


function square(ali=5){
    return ali**2

}

const bekir = square()
console.log(bekir);
const onur = square(7)
console.log(onur);


// const bekir = function(){
//     let ali=prompt('deger gir')
//     let veli = square(ali)
//     console.log('islemin sonucu:', veli);
// }
// bekir()

// (() => {
//     console.log('bekirr')
//   })()



///Cark  
//   const ali = ['bekir','hamida','saadet','mustafa','muzaffer','omer']

//   const index = Math.floor(Math.random() *ali.length)
//   console.log(ali[index]);

  
  
  
  
  
