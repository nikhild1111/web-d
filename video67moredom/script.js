
////*********iiiiiiimmmmmmmmmmpppppppp */
// In the Document Object Model (DOM), child counting generally starts from 0, particularly when accessing child elements using JavaScript.

// When you use methods like childNodes, children, or querySelectorAll, the indexing of child elements starts from 0. 

console.log("hallow world")
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[2]);
console.log(document.body.childNodes[3]);
console.log(document.body.childNodes[4]);
console.log(document.body.childNodes[5]);
console.log(document.body.childNodes[5].childNodes);
let cont=document.body.childNodes[5];
//now we can accesss body container element with cont
// index start form 0
console.log(cont);
console.log(cont.firstChild);
console.log(cont.lastChild);

//for directly geting a child which was a element we use  firstelementchild 
//note taht text node is also the child but which was not element
console.log(cont.lastElementChild);
cont.lastElementChild.style.color="red";
cont.lastElementChild.style.backgroundColor="green";
cont.lastElementChild.parentElement;

console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.childNodes);

console.log(document.body.firstElementChild.children);//when we want only child(element) use children
console.log(document.body.firstElementChild.children[0]);
console.log(document.body.firstElementChild.children[2].previousElementSibling);
console.log(document.body.firstElementChild.children[2].previousSibling);
//text node is also sibling
console.log(document.body.firstElementChild.children[2]);
console.log(document.body.firstElementChild.children[3]);
console.log(document.body.firstElementChild.children[3].nextElementSibling);
//the element wnich having same parent thy are siblings
// console.log(document.body.firstElementChild.children[4]);
console.log(document.body.firstElementChild.children[3].parentElement);


console.log(document.body.children);
console.log(document.body.children[1]);
console.log(document.body.children[1].rows);
console.log(document.body.children[1].nextElementSibling);