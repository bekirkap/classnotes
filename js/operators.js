//arithmetic operators
 //toplama cikar carpma bolme ornek yazmadim


 //kuvvet alma
 let a=19
 let b= 7
 console.log(a**3);
//kalan bulma
console.log(a % 7);
//saat ve dakika
let time=375
let hour=Math.trunc(time/60)
console.log(hour);
let minute= 375 % 60
console.log(`hour ${hour} minute ${minute}`);

//bugun sali ise 177 gun sonra hangi gun olur
let gun= 177 % 7
console.log(gun);


//increment decrement 

let z=5
console.log(z++);
console.log(z);
console.log(++z);

//
mert=10
hakan=50
console.log(mert+=hakan);

console.log(mert);
//
console.log(3==='3');
//
console.log(3>2);
console.log(3<=2);
//
bekir=24
nk='24'
console.log(bekir>=nk);
console.log(bekir!=nk);
console.log(bekir!==nk);
console.clear()

///
console.log(Boolean(1 && 1));
console.log(Boolean(0 && 1));
console.log(Boolean(0 && 0));
console.log(Boolean(1 && 0));
console.log(Boolean(1 && 0 && 1));
console.log(Boolean(1 && 1 && 1));
//
console.log(Boolean(1 || 1 || 1));
console.log(Boolean(1 || 0 || 1));
console.log(Boolean(1 || 0 || 0));
console.log(Boolean(0 || 0 || 0));

