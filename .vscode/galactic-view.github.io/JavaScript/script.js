//Функция AlERT
const alert1 = 'Привет, друг! Это мой первый сайт. Поддержи меня лайком <3'
alert(alert1)

//Функция PROMT
//const userAge = prompt('Укажите Ваш возраст')
//if (userAge >= 18) {
 //   console.log('Доступ разрешен')
//} else {
//    console.log('Доступ запрещен')
//}

/* const userAge1 = prompt('Укажи свой возраст')
if (userAge1 >= 18) {
    alert('Доступ разрешен')
} else {
    alert('Доступ запрещен!')
} */



//ТИПЫ ДАННЫХ
//Строки
const greeting = 'Привет';
const name = 'Макар';
const message = `${greeting}, ${name}!`;
console.log(message);


const a = 5;
const b = 10;
const sum = `Сумма a и b равна ${a + b}`;
console.log(`Sum is ${a + b}`);

const n = 'Alice';
const res = `Hello, ${n}!`;
console.log(res)

//Number
const posX = 50
const posY = -100
const posZ = 1.55

const point = (posX + posY + posZ) * 2 / posX

console.log(point)

//BigInt
console.log(99000000000000091n + 1n)

//Boolean
const age = 11
const isChild = age < 18
console.log(isChild)

//Null
let data = null
console.log(data)

//Undefind
let nameundefind
console.log(nameundefind)

//Object
const user = {
    nameUser: 'Makarchik',
    ageUser: 29,
    isDeveloper: true,
}

console.log(user)

console.log(5 * -2 + 10 / -3)

//If else

//Если год указан верно, то в консоле отобразится первый лог
const year = 2025
if (year === 2025) {
    console.log('Ура!')
    console.log('Время изучать JavaScript')
} else {
    console.log('Неизвестный год =/')
}

//Если год указан не верно, то в консоле отобразится второй лог
const year1 = 1996
if (year1 === 2025) {
    console.log('Ура!')
    console.log('Время изучать JavaScript')
} else {
    console.log('Неизвестный год =/')
}

//Можно добавить условие через else if
const year2 = 2026
if (year2 === 2023) 
{    console.log('Ура, я стал тестировщиком!')
} else if (year2 === 2026) {
    console.log('Ура! Я стал фронтендером!!! :)')
} else {
    console.log('Неизвестный год')
}

//Тенарный оператор ?
const year3 = 2025
const massage = year3 ===2025
? 'Начинаю учиться'
: 'неизвестный год'
console.log(massage)

const year4 = 2023
const massage1 = year4 ===2025
? 'Начинаю учиться'
: 'Неизвестный год'
console.log(massage1)

//Оператор ИЛИ ||  
const age4 = 17
const withParent = true
if (age4 > 18 || withParent) {
    console.log('Проходите')
} else {
    console.log("Несовершеннолетным вход закрыт")
}

const age5 = 17
const withParent1 = false
if (age5 > 18 || withParent1) {
    console.log('Проходите')
} else {
    console.log("Несовершеннолетным вход закрыт")
}

//Оператор И &&
const moneyInWallet = 5
const iceCreameprice = 2
const isStoreOpen = true

if (iceCreameprice < moneyInWallet && isStoreOpen) 
    console.log('Вот Ваше мороженое!')
    else {
        console.log('Вот Ваше мороженое!')
    }

const moneyInWallet1 = 5
const iceCreameprice1 = 6
const isStoreOpen1 = true

if (iceCreameprice1 < moneyInWallet1 && isStoreOpen1) 
    console.log('Вот Ваше мороженое!')
    else {
        console.log('Магазин закрыт!')
    }

//Оператор НЕ !
const name1 = 'Иван'
const age7 = 22
const hasMuchMoney = false
const hasGoodJob = false
const hasMotivation = true
const hasFreeTime = true

if (name1 !== 'Иван') {
    console.log('Вы не Иван! Позовите Ивана, блядь!')
} else if (age7 < 16) {
    console.log('Тебе еще рано думать о взрослой жизни')
 } else if (!hasMuchMoney || !hasGoodJob || hasMotivation && hasFreeTime) {
    console.log('Ивану нужно учить фронтенд')
    } else {
        console.log('Ты либо безумно богат, что можешь не работать до конца жизни, либо у тебя и так хорошая работа, либо тебе просто это не нужно')
    
    }



