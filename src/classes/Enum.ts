enum RType {SUCCESS,FAILURE,UNAUTHENTiCATED,FORBIDDEN}
interface APIResponse<T> {
    status:number;
    type:RType;
    data: T;
}

const response2: APIResponse<string> = {
    status:200,
    type:RType.SUCCESS,
    data:'test'
}

console.log(response2);
