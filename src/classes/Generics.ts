// const addID = <T extends {name:string; age:number}>(obj:T) =>{
// let id = Math.floor(Math.random() * 100);
// return {...obj,id}
// }

// let user = addID({
//     name:'Ishtiak',
//     age:21,
//     country:"Bangladesh"
// })


// addID(user)

// interface APIResponse<T> {
//     status:number;
//     type:string;
//     data: T;
// }

// const response1: APIResponse<object> = {
//     status:200,
//     type:"Good",
//     data:{
//         name:'Test',
//         something : 300
//     }
// }