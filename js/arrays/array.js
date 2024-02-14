//dizi tanimlama

const names = ['ahmet', 'bekir', 'onur', true, 55, [1, 2]
,'omer'

]
console.log(names);
console.log(names.length);
console.log(typeof names); //object
//diziden yazdirma
console.log(names[1]);
console.log(names[5][0]); 
//son element yazdirma
const lastelement = names[names.length-1]
console.log(lastelement);
////
console.log(names[2].toUpperCase());
console.log(names[2]);
names[2] = names[2].toUpperCase()
console.log(names);


// yaygin olmayan yontem
const languages = new Array('eng', 'tr', 'fr')
console.log(languages);
const denem = new Array(3)//3 elemanli bos array olusturur
console.log(denem);

//3. yontem
const sayilar = Array.of(4)
console.log(sayilar);


///----------------------------////
///-----------mutator-----------///

const cars = ['bmw', 'renault', 'togg', 'tofas']

// cars[cars.length] = 'fiat'
cars.push('kartal')//hazir fonksiyon kullandik ayni zamanda push eleman sayisini da dondurur for exxx
const el = cars.push('mazda')
console.log(cars, el);//eleman sayisini da verdi

 //sondan silme
 cars.pop()      
 console.log(cars);

 //bastansilme
 cars.shift()
 console.log(cars);

//bastan ekleme push gibi eleman sayisi da basar degiskene atarsan
cars.unshift("mercedes")
console.log(cars);


//splice araya birsey ekleme ve cikarma
cars.splice(2, 0, 'bugatti')//uzerine yazmak icin 1 yazacaktik 2. indi gidecekti
console.log(cars);

cars.splice(3,0,'audi','wv','toyota')
console.log(cars);

// reverse aynalar-ters cevirir
cars.reverse()
console.log(cars);


//sort a dan z ye siralar
console.log(cars.sort());
console.log(cars.sort().reverse());


const numbers = [3,5,6,22,100,90,85,15]  
console.log(numbers.sort());//ilk rakama gore siralar

numbers.sort( (a,b) => a-b  )
console.log(numbers);


//fill butun elemanlara ayni degeri basar 

const degerler = [2,5,6,4,3,99,55]
degerler.fill(0)
console.log(degerler);

///-------- access methodhs-----------///
const books = ['new world', 1984, 2000, 'millenium', 1984]


//includes boolean dondurur
console.log(books.includes(1984));
console.log(books.includes('millenium'));
console.log(books.includes('millenim'));
console.log(books.includes(2000, 4));//4. indexten sonra 2000 yok


//indexof lastindexof index noi dondurur

console.log(books.indexOf(1984));
console.log(books.indexOf(1980));//-1 dondurur olmadigi icin
console.log(books.indexOf(1984,2));//2. indexten sonraki 1984
console.log(books.lastIndexOf(1984));


//join birlestirir ve string yapar
//----------------------
const birles = books.join(" ")
console.log(birles);
//tostring join ile ayni ama parametre almaz
console.log(books.toString());


//concat
const city = ['izmir', 'istanbul', 'konya','maras','bursa']
const time = new Date().toDateString()
console.log(time, city);

// const concatedarray = city.concat(time)//arraye eleman ekler
const concatedarray = time.concat(city)//stringe ekler str olur
console.log(concatedarray);



