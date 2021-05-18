var x = 2;                                       // Задание 1
function isPrime(num) {
    var i = 2;
    while (i <= num / 2) {
        if (num % i == 0) {
            return false;
        }
        i++;
    }
    return true
}
while (x <= 100) {
    if (isPrime(x)) {
        console.log(x);
    }
    x++;
}

var i = 2;                                          //Задание 1 (Второй вариант)
while(i <= 100){
    var j = 2;
    while(j <= i){
        if(i % j == 0) {
            break;
        }
        j++;
    }
    if(j == i){
        console.log(i);
    }
    i++
}


var basket = [                                     //задание 2/3
    {
        title: "Товар 1",
        price: 700,
        count: 1
    },
    {
        title: "Товар 2",
        price: 950,
        count: 2
    },
    {
        title: "Товар 3",
        price: 1200,
        count: 3
    }
]

function countBasketPrice(mas) {
    var sumBasket = 0;
    for (var item of mas) {
        sumBasket += item.price * item.count;
    }
    return sumBasket;
}
console.log(countBasketPrice(basket));

for(i = 0; i<=9;console.log(i++))                               // Задание 4

var line = "";
for(i=0; i<20; i++){
    line+="X";
    console.log(line);
}
