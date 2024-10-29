let a = [1, 2, 3, 4, 5, 6, 7];

async function getData(arr) {
    //async function always return promiss
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let newarr = arr.map((value, index, arr) => {
                return value * 2;
            })
            resolve(newarr);
        }, 3500);
    })
}

// let array = getData(a);
// array.then((v)=>{
//     for(let i=0;i<v.length;i++){
//         console.log(v[i]);
//     }
// })

// or
getData(a).then((v)=>{
    for(let i=0;i<v.length;i++){
        console.log(v[i]);
    }
})