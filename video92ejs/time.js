for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i);  // Corrected console log
    }, 10000); 
    console.log("i am a" ,i); // Corrected setTimeout
  }
  
console.log(" now talk about var")
  for (var i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i);  // Corrected console log
    }, 100); 
    console.log("i am a" ,i); // Corrected setTimeout
  }