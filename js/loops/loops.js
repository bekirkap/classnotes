///loops

//ortalama 50 kisi hesaplama

// let sum = 0
// let i=1
// for(i=1; i<= 2; i++){
//     const notlar = +prompt(`${i}. notu gir:`)   
//     sum = sum + notlar
// }
// console.log(`avg:${sum/ (i-1)}`);

//geri yonde degisim

// for(let i = 10 ; i>=0; i--){
//     console.log(i);
// }

//sayi toplami
// const sayi1=3
// const sayi2=5
// let toplam= 0

// if(sayi1>sayi2){
//     alert('sayi 1 kucuk olmalidir')
// }
// else{for(i=sayi1+1; i<sayi2; i++){

//     toplam+=i
// }
// console.log(toplam);
// }

//break-continue
// for(let i=0; i<=10; i++){
//     if(i===6){
//         break
//     }
//     console.log(i);
// }

// for(let i=0; i<=10; i++){
//     if(i===6){
//         continue
//     }
//     console.log(i);
// }


//while dongusu
// let i=1
// while(i<=10){
//     console.log(i,'besiktas');
//     i++
// }
// console.log('bitti');
// //

// let not = +prompt('not giriniz')

// while(not>100 || not<0 ){
//     alert('sayi 0-100 arasinda degil')
//     not = prompt('yeniden sayi girin veya cikmak icin q ya basin')
//     if(not === 'q'){
//         break
//     }


// }
// console.log(not); 
//
//  let not2 = 0
//  for(not2 = +prompt('0-100 arasinda deger gir'); not2<0 || not2>100; not2 =+prompt('0-100 arasinda deger gir')){
 
//  }
//  console.log(not2);
// console.log('bitti');

//do while
// let sayac1 = 1
// do{
// console.log(sayac1);
// sayac1++
// }while(sayac1<=10)

//
let final= 0
let vize= 0
let exit= 0
let ortalama= 0
do{

    vize= +prompt('vize notu giriniz')
    final= +prompt('final notu giriniz')
    ortalama = vize*0.3 + final*0.7
    if(ortalama>=50){
        console.log(`ortalama ${ortalama} gecer`);
        alert(`ortalama ${ortalama} gecer`
        )
    }
    else{
        console.log(`ortalama ${ortalama} kalir`);
        alert(`ortalama ${ortalama} kalir`)

    }
    exit = prompt('cikmak icin q ya basin,devam etmek icin tamama tiklayin').toLowerCase()
}while(exit !== 'q')




