'use stricts'

const a ={
    a  : 12,
    b : "ABC"
}


console.log(a)
const b = a;
console.log(b)
b.name = "Masalb";
console.log(b)
function test() {
    console.log("Hello")
    
}
test()
const  tekst = ()=> {
    console.log("hello 2")
}
tekst()
const myCity = {
    city : 'Kharkov',
    human : "male",
}
console.log(myCity);
myCity.name = "Alex";
myCity.age2 = 26;
myCity.event = () =>{
    console.log("Work")
}
myCity.event()
console.log(myCity)
delete myCity.event
console.log(myCity)
myCity['populare'] = true
console.log(myCity)
const name = "Alex"
const age = 29

const infoUser = {
    name,
    age,
    human : true
}
console.log(infoUser)









const user = {
    hello : "Aleksandr",
    sayHello (){
        console.log('Hello Aleksandr')
    }
}
console.log(user)
user.sayHello()
JSON.stringify(user);
const testJSON = JSON.stringify(user);
console.log(testJSON)
const x = JSON.parse(testJSON)
console.log(x)

// Создание обьекта с избежанием мутации №1
const person ={
    name: 'Vlad',
    age: 29
}
const person2 = Object.assign({} , person)

person2.name = "Alex"
person2.age = 22
person2.country = "Ukraine"
console.log(person)
console.log(person2)
// Оператор Cпрет Создание обьекта с избежание мутации №2 

const user1 ={
    name: 'Vlad',
    age: 29
}
const user2 = {...user1}

user2.name = "Alex"
user2.age = 22
user2.country = "Ukraine"
console.log(user1)
console.log(user2)
// Создание обьекта №3 JSON Ссылки на Вложение Обьекты не сохраняються
let user3 = JSON.parse(JSON.stringify(user1))
user3.name = 'Olya'
user3.age = 21
console.log(user3)


function myFN(a,b) {
    c = a + b
    return c
}
console.log(myFN(10,5));
console.log(myFN("Alex" ," Masalitin"));
// Передача значения по ссылке
// Функция мутирует внешний обьект (НЕ РЕКОМЕНДУЕТСЯ)
const personOne = {
    name : 'Olya',
    age : 21
}
function incrementAge(person) {
    person.age += 1
    return person
    
}
incrementAge(personOne)
console.log(personOne.age)

// Передача значения по ссылке (Cоздание копии обьекта)
const personTwo = {
    name : 'Olya',
    age : 21
}
function incrementperson(personTwo){
    const updatePerson = Object.assign({}, personTwo)
    const updatePersonone = personTwo.age += 1
    return updatePerson
}
console.log(personTwo.age)
 const updatePersonone = incrementperson(personTwo)
console.log(personTwo.age)

console.log(updatePersonone.age)
// Так работает Сallback function
// функция вызиваеться на аргумент другой функции
function printName (){
    console.log('hello Alex')
}

setTimeout(printName , 2000)

// Локальная область видимости
function firstFn() {
    let a =  "Работает"
    function print(){
        console.log('Локальная область видимости ' + a)
    }
    print()
}
firstFn()
// Глобальные переменые в функциях
// Цепочка областей видимости

let  number = 10
function numberTest() {
    function innerTest(){
        console.log(number)
    }
    innerTest()
}
numberTest()


// Оператор СПРЕТ если есть такое же свойство с другим значение оно перезапишиться
const button = {
    width : 200,
    text : 'Buy',
    color : 'black'
}
const buttonRed = {
    ...button,
    color : 'red'
}
console.table(button)
console.table(buttonRed)

//Обьединение обьектов с помошью ...

const buttonInfo = {
    text : 'Hello'
}
const buttonSize = {
    width : 200,
    height : 300,
    color : 'white'
}
const buttonStandart = {
    ...buttonInfo,
    ...buttonSize,
    event : 'Click'
}
console.table(buttonStandart)


const newPost = (post, addetAt = Date()) =>({
    ...post,
    addetAt,
})
const firstPost = {
    id: 1 ,
    autor : 'Alex',
}
console.log(newPost(firstPost))

const fnWithError = () =>{
    throw new Error ('Some error')
}



try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}
console.log('Wait')
