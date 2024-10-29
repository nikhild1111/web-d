async function brewcoffee(type){
    //check promiss speling
    let k=Math.random();
     return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(`${type} is ready my friend;`);
            
            k=5000*k;
        },k);
     });
}
async function main(){
    let type=prompt("Enter the type of coffee :");
    let ans=await brewcoffee(type);
    //awit direct hanle the resolve so direct print it
    // ans.then((v)=>{
    // console.log(v);
// });
    console.log(ans);
    
}
main();//run the function