const topla = (sayi1,sayi2) => sayi1+sayi2
const cikar = (sayi1,sayi2) => sayi1-sayi2
const carp = (sayi1,sayi2) => sayi1*sayi2
const bol = (sayi1,sayi2) => sayi1/sayi2

const hesapla = (s1, s2, op) =>{
  let sonuc = 0
    switch (op) {
    case '+':
        sonuc = topla(s1, s2)
        break;
    case '-':
        sonuc = cikar(s1, s2)
        break;
    case '*':
        sonuc = carp(s1, s2)
        break;
    case '/':
        sonuc = bol(s1, s2)
        break;
    default:
        alert('yanlis islem')
        break;
  }
return sonuc
}
const num1 = +prompt('1.sayi')
const islem = prompt('islem gir')
const num2 = +prompt('2.sayi')
const sonuc = hesapla(num1,num2, islem)
console.log(sonuc); 
