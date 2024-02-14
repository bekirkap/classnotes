const ad = `Bekir`
const soyad = `kaplan`
console.log(`student name ${ad} ${soyad.toUpperCase()}`);

const fullname = ad.concat(soyad)
console.log(fullname);

//
const deneme = `buyuk harf deneme stringi`
console.log(deneme.toUpperCase());
console.log(deneme);
const deneme2 = deneme.toUpperCase()
console.log(deneme);
//string parcalama
//split() parcaladigini bolumleri arraye cevirir
//string.split(seperetor)

console.log(deneme.split(' '))//stringi array yapti
const ayirma = deneme.split(' ')
for(i=ayirma.length-1; i>=0; i--){
    console.log(ayirma[i]);
}

console.log(ayirma.reverse());//arrayi terse cevirme
console.log(ayirma.reverse().join(' ')); //arrayi str yapar

//slice methodu
let soz ='oku adam ol'
console.log(soz.slice(2,8));
console.log(soz.slice(-8,-2));
 //substring
console.log(soz.substring(2,8));//tek fark negatif deger yok
//------------
//----string de degisiklik---//
let soz2 = 'Kelin ilaci olsa kendine kullanir'
console.log(soz2.replace('Kelin', 'akillinin'));

let variable = 'kullanıcı adı'
let yeni = variable.replace(' ', '_')
// yeni = variable.replace('ı', 'i')//sadece biri degiti
yeni = variable.replaceAll('ı','i')
console.log(yeni);
 //-----////----//
 //string icinde arama
  console.log(soz2.includes('ilac'));
 
let url='https://clarusway.com'
let msg = url.includes('https') ? 'bu site guvenilir' : 'bu site gunvenilir degil' 
console.log(msg);
//
console.log(url.indexOf('clar'));
console.log(url.indexOf('ber'));//-1 donderir
//
console.log(url.search('co'));






