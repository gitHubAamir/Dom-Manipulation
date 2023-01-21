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
let headerTitle= (document.getElementById("header-title"));
// console.log(headerTitle)
// headerTitle.textContent= "Header Changed"; // CHANGING HEADER BY USING THE VARIABLE.

// TEXTCONTENT & INNERTEXT
// TEXTCONTENT WILL DISPLAY EVERYTHING WHICH IS THERE IN THE WEB PAGE.
// INNERTEXT WILL FOCUS ON THE STYLING PART( like if there is a span tag inside the head tag <span style=display:none;>123</span> the 123 is not displaying in the web page because of the style attribute( css ) and the innertext will focus on that and it will not display it. Whereas the textcontent will display everything and ignores the styling part too. Try to console.log(""), the header with text content and innertext after adding a span tag to the heading.
// headerTitle.textContent= "Hello";
// headerTitle.innerText= "Bye"; //BOTH DOES THE SAME THING BUT HAS A SLIGHT DIFFERENCE.
// headerTitle.innerHTML= "<h3>Hello</h3>" // IT DOES NOT CHANGE THE H1 TO H3 INSTEAD IT WILL PUT H3 INSIDE OF THE H1 TAG( check in the inspector (Elements nt console)).
// console.log(headerTitle)
let header= document.getElementById("main-header");
header.style.borderBottom= "solid 3px #000"; // CHANGING THE STYLE WITH style.whateverTheCSSproperty is and use Camel notation for the css property.


// SHARPENER EXE//
let head2= document.getElementById("secondhead") // ADDED AN ID TO THE H2 TAG
head2.style.color= "green";
head2.style.fontWeight= "bold";





// ********2
// GETELEMENTBYCLASSNAME

