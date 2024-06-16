import {IsPlayer} from '../classes/Interface.js'
export class Player implements IsPlayer{
    constructor(
      public  name:string,
      public age:number,
      readonly  country:string,
    ) {}

    
    getAge(){
        return this.age
    }
play(){
    console.log(`${this.name} from ${this.country} is playing!`);
    
}
}
