console.log("this is Exrsize-9 about faulty calculator ")

let ra=Math.random();
console.log("random num is :",ra);
// Math.random(): This function returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
function cal(a,b,op){
    if(ra<0.2){
        if(op=='+'){
            console.log("result is :",a-b);
        }
        else if(op=='*'){
            console.log("result is :",a+b);

        }
        else if(op=='-'){
            console.log("result is :",a/b);

        }
        else{
            console.log("result is :",a**b);
        }
    }
    else{
        if(op=='+'){
            console.log("result is :",a+b);
        }
        else if(op=='*'){
            console.log("result is :",a*b);

        }
        else if(op=='-'){
            console.log("result is :",a-b);

        }
        else{
            console.log("result is :",a/b);
        } 
    }
}
cal(6,4,'-');