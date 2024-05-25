// let scrambledArray=["student","of", true,123,"am", "a","GIAIC","I"];
//  let filteredArray=scrambledArray.filter(element=>typeof element==="string");
 
// let rearrangedArray=[];
// rearrangedArray.push(filteredArray.find(element=>element==="I"));
// rearrangedArray.push(filteredArray.find(element=>element==="am"));
// rearrangedArray.push(filteredArray.find(element=>element==="student"));
// rearrangedArray.push(filteredArray.find(element=>element==="of"));
// rearrangedArray.push(filteredArray.find(element=>element==="GIAIC"));
// let result =rearrangedArray.join (' ');
// console.log(result);



let scrambledArray=["student","of", true,123,"am", "a","GIAIC","I"];
 
scrambledArray.shift(); // remove first element
scrambledArray.pop();    //remove last element
scrambledArray.unshift("I"); //Add  "I" At the beginning
scrambledArray.splice(1,3); 
scrambledArray.splice(2,3,"student","of"); 
scrambledArray.splice(4,1,"a GIAIC"); 
console.log (scrambledArray.join (' '));



