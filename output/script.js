"use strict";
// const country = "i love bangladesh"
// let countryPeople = 23
// console.log(country);
// countryPeople = 89
// console.log(countryPeople);
// multiply
// function multiply(a:number,b:number){
//     return a + b;
// }
// console.log(multiply(3,5));
// Array
// let fruits = ['apple','banana','orange']
//  fruits.push('Kamla')
//  console.log(fruits);
// let fruit = []
// fruit.push('Kamla')
// fruit.push(0)
// console.log(fruit);
// let mixed = ['apple', 4 , {}]
// mixed.push({
//     name:'Ishtiak'
// })
// console.log(mixed);
// object
// let person = {
//     name:"Ishtiak Anam",
//     age: 23,
//     isCaptain : true
// }
// person.age = 32
// console.log(person);
// string array
// let a: string[] = []
// a.push('Ishtiak Anam')
// object
// let c : {
//     name: string,
//     age: number,
//     adult: boolean
// }
// c = {
//     name: "Ishtiak Anam",
//     age:21,
//     adult:true
// }
// union array
// let a: (number | string)[] = []
// a.push('Ishtiak Anam',21)
// dynamic type or any type
// let a: any[] = []
// a.push("Bangladesh");
// a.push(32)
// let b: {
//     name:any,
//     age:any
// }
// function type
// let myFunc :Function
// myFunc = () => {
//     console.log("ishtiak");
// }
// const myFunc = (a:string,b:string, c?: string) => {
//     console.log(`Hello ${a} ${b}`);
// }
// myFunc("A","B")
// type aliases
// type stringOrNum  = string |number
// type userType = {
//     name:string,age:number
//     }
// const userDetails = (
//     id:stringOrNum,
//     user: userType) =>{
//     console.log(`user id is ${id},name is ${user.name} and age is ${user.age}`);
// }
// const seyHello = (user :{name:string;age:number})=>{
//     console.log(`Hello ${user.age > 50 ? "sir" : "mr"} ${user.name}`);
// }
// signature
// let add : (x:number,y:number) => number;
// add = (a:number,b:number) => {
//   return a + b
// }
// let userDetails : (id:number | string, userInfo : {
//     name:string,
//     age:number
// }) => void
// userDetails : (id:number | string, user : {
//     name:string,
//     age:number
// }) => {
// }
// class
// class Plyer {
//     name:string;
//     age:number;
//     country:string;
//     constructor (n:string,a:number,c:string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
// }
// play(){
//     console.log(`${this.name} from ${this.country} is playing!`);
// }
// }
// const mashrafi = new Plyer('Mashrafi', 48, 'Bangladesh')
// access modifier(private,public,randomly) ----- we can do private any object or array for no change in class....we can do public then we can change the value
