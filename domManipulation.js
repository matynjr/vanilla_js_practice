/*DOM represents the structure of a html page in a heirarical tree structure.
-It allow js to interact with html elements
-DOM is the exact html but represented as a js object
-DOM has methods which are functions that help to select different element on a html page eg
header on a page, document.querySelector('h1');
-Dom has sub object e.g we can a function to the h1 to listen to clicks on the
html h1 tag e.g {h1}.addEventListener
-DOM also has properties e.g .style.color="red";
*SELECT => querySelector
*MAKE INTERACTIVE => addEventListener
*CHANGE CSS => style property

*/

// methods

// 1.adding elements to the page
// we use append to add elements to the body
//if we wanted to add hello world to the page we do this

const body = document.body
body.append('hello world')

//we can also append multiple things
body.append("javascript","is fun")


//creating elements
const div = document.createElement('div')
// add text to the created div
div.innerText ='first inner html'
//or
div.textContent ="second inner html using textContent"
//after creating an element we need to add it to the html body

//rendering html within a div
div.innerHTML="<strong>this is html rendered within a div</strong>"

body.append(div)
//or we can create another element
const strong = document.createElement('strong')
strong.innerText ="this is strong text"
body.append(strong)

