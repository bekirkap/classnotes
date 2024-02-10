//1
// const topla = (num1, num2)=>{
//     return num1+num2
// }
const topla = (num1, num2)=> num1+num2
console.log(topla(4,5));
//2
const yashesapla = (yil) => new Date().getFullYear() - yil
const yil = 2000
console.log(`yasiniz ${yashesapla(yil)}`)
//3
const tekcift = (num) => {
    let sonuc = ""
    if(num%2 === 0){
        sonuc = "sayi cift"
    }
    else{
        sonuc = 'sayi tek'
    }
    return sonuc
    
}
const sonuc = tekcift(5)
console.log(tekcift(4));
console.log(sonuc);

