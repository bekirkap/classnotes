
// function carp(num1, num2){
//     // console.log(num1*num2);
//     return num1*num2
// }
// const sonuc = carp(5, 3)
// console.log(sonuc);

function calculator(num1, islem, num2){
    if(islem === "+"){
        return num1+num2
    }
    else if(islem === "-"){
        return num1-num2
    }
    else if(islem === "*"){
        return num1*num2
    }
    else if(islem === "/"){
        return num1/num2
    }
    else{
        return alert('lutfen islem giriniz')
    }
}

const sonuc = calculator(5, '+', 3)
console.log(sonuc);
// console.log(calculator(4," ",5));
