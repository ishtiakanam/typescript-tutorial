// interface RectangleOptions{
//     width:number;
//     length:number
// }

// function DrawRectangle ( options:RectangleOptions){
//     let width = options.width
//     let length = options.length
// }

// let threeDOption ={
//     width:30,
//     length:20,
//     height:30
// }

// DrawRectangle(threeDOption)


export interface IsPlayer {
    name:string;
    age:number;
   readonly country:string;

    play() :void
    getAge():number
}