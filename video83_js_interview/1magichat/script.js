let stud=["nikhil","niraj","Shubham","ravindranathm","harry","niraj","avi","rameshweram","code_with_harry","ranganath","krishna"];
// let house=[];
let house={};

// for(let stu of stud){
//     if(stu.length<6){
//         house.push("gryffindor");
//     }
//     else if( stu.length<6){
//         house.push("Hufflepuff");
//     }
//     else if(stu.length<12){
//         house.push("ravenclaw");
//     }
//     else{
//         house.push("slytherin");
//     }
// }
for(let stu of stud){
    if(stu.length<6){
        house[stu]="gryffindor";
    }
    else if( stu.length<6){
        house[stu]="Hufflepuff";
    }
    else if(stud.length<12){
        house[stu]="ravenclaw";
    }
    else{
        house[stu]="slytherin";
    }
}
console.log(house);
