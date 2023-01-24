// // EXAMINE THE DOCUMENT OBJECT 
// console.dir(document);

// // PROPERTIES
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); // IT WILL GIVES US AN HTML COLLECTION( starts with 0-index like an aray or list) OF EVERYTHING WHICH IS IN THE DOM.
// console.log(document.all[10]); // IT WILL GIVES US THE ELEMENT WHICH HAS 10 NUMBER OF INDEX(0-9).


// // TO CHANGE THE TITLE
// // document.title= 123;
// // console.log(document.title);


// // SELECTING ITEMS IN DOM
// console.log(document.forms);
// console.log(document.forms[0]); // FORM SELECTION
// console.log(document.links);
// console.log(document.images);

//  SELECTORS( we have different selecting methods)

// GETELEMENTBYID *******1
// console.log(document.getElementById("header-title"))
//  WE CAN PUT IT INSIDE A VARIABLE TOO.
// let headerTitle= (document.getElementById("header-title"));
// console.log(headerTitle)
// headerTitle.textContent= "Header Changed"; // CHANGING HEADER BY USING THE VARIABLE.

// TEXTCONTENT & INNERTEXT
// TEXTCONTENT WILL DISPLAY EVERYTHING WHICH IS THERE IN THE WEB PAGE.
// INNERTEXT WILL FOCUS ON THE STYLING PART( like if there is a span tag inside the head tag <span style=display:none;>123</span> the 123 is not displaying in the web page because of the style attribute( css ) and the innertext will focus on that and it will not display it. Whereas the textcontent will display everything and ignores the styling part too. Try to console.log(""), the header with text content and innertext after adding a span tag to the heading.
// headerTitle.textContent= "Hello";
// headerTitle.innerText= "Bye"; //BOTH DOES THE SAME THING BUT HAS A SLIGHT DIFFERENCE.
// headerTitle.innerHTML= "<h3>Hello</h3>" // IT DOES NOT CHANGE THE H1 TO H3 INSTEAD IT WILL PUT H3 INSIDE OF THE H1 TAG( check in the inspector (Elements nt console)).
// console.log(headerTitle)
// let header= document.getElementById("main-header");
// header.style.borderBottom= "solid 3px #000"; // CHANGING THE STYLE WITH style.whateverTheCSSproperty is and use Camel notation for the css property.


// SHARPENER EXE//
// let head2= document.getElementById("secondhead") // ADDED AN ID TO THE H2 TAG
// head2.style.color= "green";
// head2.style.fontWeight= "bold";





// ********2
// GETELEMENTBYCLASSNAME
// let items= document.getElementsByClassName("list-group-item");
// console.log(items)
// console.log(items[0])
// console.log(items[1])
// items[0].textContent= "Item 1 Changed";
// // items[0].style.fontWeight= "bold";
// // items[0].style.backgroundColor= "grey";
// items[3].style.color= "red";
// items[4].style.color= "red";

// // ASSIGNING BACKGROUND COLOR TO ALL THE ITEMS 
// for(let i=0; i<items.length; i++){
//     items[i].style.backgroundColor= "yellowgreen";
//     items[i].style.fontWeight= "bold";
// }
// items[2].style.backgroundColor= "green"


// GETELEMENTBYTAGNAME ( does the same thing like getelementbyclass but with the tag name)
// let li= document.getElementsByTagName("li");

// for(let i=0; i<li.length; i++){
//     li[i].style.backgroundColor= "yellowgreen"
// }

// SHARPENER EXE
// li[4].style.color= "red"; // BY TAGNAME


// QUERYSELECTOR ( you can use it for only 1 item)
// let header= document.querySelector("#main-header"); //( you can use any css selector)
// header.style.borderBottom= "solid 5px #ccc";

// let inp= document.querySelector("input"); // If the input tags are multiple it will only grab the first one.
// inp.value= "Hello, World!"

// let submit= document.querySelector('input[type="submit"]');
// submit.value= "Tamashe Kardo"

// let item= document.querySelector(".list-group-item");
// item.style.color= "red";  //There are 5 items but query selector choose the first item to apply the property.

// let lastChild= document.querySelector(".list-group-item:last-child");
// lastChild.style.color= "red"; //last-child is the css property to select the last item.

// let nthChild= document.querySelector(".list-group-item:nth-child(2");
// nthChild.style.color= "blue"; // nth-child() is again the css property to select the item.

// SHARPENER EXE
// let item2= document.querySelector(".list-group-item:nth-child(2)");
// item2.style.backgroundColor= "green";
// let item3= document.querySelector(".list-group-item:nth-child(3)");
// item3.style.backgroundColor= "red";
// item3.style.visibility= "hidden";


// QUERYSELECTORALL ( it will grab more than one thing)
// It return a NodeList and we can run array function to it.

// let title= document.querySelectorAll(".title");
// console.log(title)
// title[0].textContent= "Shuru Kare";
 
// SHARPENER EXE
//  let item= document.querySelectorAll(".list-group-item:nth-child(odd)");
//  for(let i=0; i<item.length; i++){
//     item[i].style.backgroundColor= "green";
//  }
 

// TRAVERSING THE DOM
// PARENTNODE  & PARENTELEMENT ( almost the same apply the below properties and check by yourself )
// let items= document.querySelector("#items");
// console.log(items.parentNode)
// console.log(items.parentNode.parentNode)
// console.log(items.parentNode.parentNode.parentNode)
// console.log(items.parentNode.parentNode.parentNode.parentNode)

// items.patNode.style.backgroundColor= "grey";

// child nodes has some probelms that it includes the line breaks so instead of using child nodes we will use CHILDREN.
// console.log(items.childNodes)  // not recommended // returns a node list
// console.log(items.children)   // recommended // returns an html collection

// FIRSTCHILD
// console.log(items.firstChild) // useless // will return the text( line break as parent node) INSTEAD USE FIRSTELEMENTCHILD
// // FIRSTELEMENTCHILD
// console.log(items.firstElementChild)

// // LASTCHLD
// console.log(items.lastChild) // SAME AS FIRSTCHILD JUST RETURN THE LAST ELEMENT. INCLUDE THE LINE BREAK
// // LASTELEMENTCHILD
// console.log(items.lastElementChild) // SAME AS FIRSTELEMENTCHILD. DOES NOT INCLUDE THE LINE BREAK


// NEXTSIBLING
// console.log(items.nextSibling) // SAME AS FIRSTCHILD
//NEXTELEMENTSIBLING ( create a sibling first in the HTML )
// console.log(items.nextElementSibling) // SAME AS FIRSTELEMENTCHILD

// PREVIOSSIBLING
// console.log(items.previousSibling) // SAME RETURNS A TEXT NODE
// PREVIOUSELEMENTSIBLING
// console.log(items.previousElementSibling) // RETURNS AN HTML COLLECTION
// items.previousElementSibling.style.color= "red";

//  SO YOU SEE YOU CAN SELECT ANYTHING YOU WANT AND YOU CAN DO WHATEVER YOU WANT WITH IT, WITH "JAVASCRIPT" YOU DON'T NEED J QUERY. BECAUSE THE ANALAGY I LIKE WHICH IS USING A SLUDGE HAMMER TO KILL A MOSQUITO. LIKE IT WILL WORK BUT YOU DON'T NEED IT. AND IT ADDS THAT EXTRA FILE TO YOUR PAGE AND JUST SLOWS YOU DOWN. SO ITS NOT LIKE THAT YOU SHOULD NOT USE J QUERY BUT FOR SIMPLE DOM MANIPULATON THERE IS REALLY DON'T NEED FOR IT.


// CREATING ELEMENT AND INSERT THEM.

// //CREATEELEMENT
// let newDiv= document.createElement("div");
// //  ADDING A CLASS TO IT
// newDiv.className= "hello";
// // ADDING ID
// newDiv.id= "hello1";
// //  ADDING ATTRIBUTE
// newDiv.setAttribute("title","Hello Div");
// // CREATING TEXT NODE
// let newDivText= document.createTextNode("Hello World");
// // ADDING TEXT TO DIV
// newDiv.appendChild(newDivText);

// let headerTag= document.querySelector("header .container"); //(inheader classcontainer)
// let h1Tag= document.querySelector("header h1");

// headerTag.insertBefore(newDiv,h1Tag); //(insertnewDiv beforeh1)
// newDiv.style.fontSize= "30px";

// SHARPENER EXE
// let li= document.createElement("li");
// let liText= document.createTextNode("Hello World");
// li.appendChild(liText);

// let ul= document.getElementById("items");
// let childUl= ul.firstElementChild
// ul.insertBefore(li,childUl);
// console.log(ul)
