let arr=[1,2,2,3,3,6,7,78,8,8,6,5,6,44,77,6,4,3,9,9];
let k=arr.length;
let i=0;
while(i<k){
    if((i+1)<k && arr[i]==arr[i+1]){
      let h=Math.random();
      if(h<0.5){
        arr[i]=arr[i]*2;
        i=i+2;
      }
      else{
        arr[i+1]=arr[i+1]*2;
           i=i+2;
      }
      
       
    } 
    else{
        arr[i]=arr[i]*2;
        i++;
    }

}
console.log(arr);