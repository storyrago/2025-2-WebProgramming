onmessage=function(e){
    let from = parseInt(e.data.op1);
    let to = parseInt(e.data.op2);
    let sum = from + to;
    let sub = from - to;
    let mult = from * to;
    let divi = from / to;
    let parameter ={
        sum: sum,
        sub: sub,
        mult: mult,
        divi: divi
    };
    postMessage(parameter);
}