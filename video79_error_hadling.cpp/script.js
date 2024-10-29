// let a=prompt("enter firet anumber")//prompt provide  one string so if we want number then use perseInt convrt it into number
// var b=prompt("enter second anumber")
// let sum=a+b//this code is wrong
// console.log("the sum is",sum)

//by default js consider num as astring
// 9+"8"=98 ans
// 9 + +'8'=17 //here +8 is convert into number shortcut method


let a=prompt("enter firet anumber")//prompt provide  one string so if we want number then use perseInt convrt it into number
var b=prompt("enter second anumber")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum=parseInt(a)+parseInt(b)//if we use parseInt on string then it will give nan (not a number)
console.log("the sum is",sum)


// error in js mdn
//*****if the error is cum then script stop there it does not go further 
try {
    console.log("the sum is",sum*x)
} catch (error) {//error variable contain error object
    // console.log("error aa gayo bhaya")
    alert(error.name)
    alert(error.message)
    alert(error.stack)
}


function main(){
    let x=1;
try {
    console.log("the sum is",sum*x)
    return true;
} catch (error) {
        console.log("error aa gayo bhaya")
        return false;
}
//finally is excuted even if error is come or not come but the main perpose of using the finaly is when we use function so when we use return then after we return then also finaly excute so thats why we use it
//if we not use function and return then we can directly write     console.log("files are being closed and db connection is being closed") but when deals with function then finaly is imp
finally{
    console.log("files are being closed and db connection is being closed")
}

}
let c=main();
