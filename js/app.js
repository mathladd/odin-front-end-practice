// ------------------------- BASIC FUNCTIONS 
prompt("What's your name?")  // pop up a text box above the browser asking the user to input. This will prevent user from accessing the page until they finish inputting
confirm('Are you sure?')  // same as above
for (let item of items) {
    // iterate through each "item" in the array "items"
}

for (let i=0; i < items.length; i++) {
    console.log(items[i])  // interate through each item "items[i]" in the array "items", with i as each item's index
}


// --------------------------- DOM OPERATIONS
console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[10])
console.log(document.forms)
console.log(document.links)
console.log(document.images)


// --------------------------- GET SINGLE NODE/ELEMENT
let bigDiv = document.getElementById('important-div')
let input = document.querySelector(".input")  // select the first element with class "input"
let submit = document.querySelector('.input[id="class-submit"]')  // select the first element with class "input" and id "class-submit"
let lastItem = document.querySelector('.list-group-item:last-child')  // select the last item in a list of elements with class "list-group-item"
let secondItem = document.querySelector('.list-group-item:nth-child(2)')  // select the second item in a list of elements with class "list-group-item"


// --------------------------- TYPICAL JS OPERATIONS ON ELEMENT
bigDiv.textContent  // get bigDiv's text disregard CSS (e.g. still return text even if CSS set this element "display" property to "none")
bigDiv.innerText  // get bigDiv's text taking CSS into account (e.g. won't return any text that has CSS "display" property as "none")
bigDiv.innerHTML = '<h3>Hello</h3>'  // WARNING: if set to user input elements e.g. textboxs, this will let users inject malicious javascript

bigDiv.getAttribute('class')     // return the value of "class" attribute i.e. bigDiv's classes
bigDiv.className                 // same as above
bigDiv.getAttribute('data-key')  // return the value of "data-key" attribute. Custom attributes have "data-" as their prefix to avoid conflicting with any other attributes e.g. class, id, src, alt...
bigDiv.setAttribute('data-key') = 65 // set bigDiv's "data-key" attribute

bigDiv.classList.add('big')       // add class "big" to bigDiv
bigDiv.classList.remove('big')    // remove class "big" from bigDiv
bigDiv.classList.toggle('big')    // turn on/off class "big" for bigDiv
bigDiv.classList.contains('big')  // return true/false if bigDiv contains class "big"

bigDiv.style['background-color'] = 'red';
lastItem.style['color'] = 'red'
input.value = 'hello world'


// --------------------------- GET NODELIST OF ELEMENTS
let items = document.getElementsByClassName('list-group-item');  // get a NodeList of all elements with class "list-group-item"
let listItems = document.getElementsByTagName('li') // get a NodeList of all elements with tag <li>
let allItems = document.querySelectorAll('.title') // get a NodeList of all elements with class "title"
let oddItems = document.querySelectorAll('li:nth-child(odd)') // get a NodeList all elements with tag li, then return a NodeList of elements at odd indices only

items[1].style['background-color'] = 'yellow';  // change the property of the element at index 1 in the NodeList
allItems[0].textContent = 'good morning'
items = Array.from(items) // convert NodeList into normal JS array

// *NOTE: getElementsBy... is live <=> its nodelist will update as the document changes. In contrast, querySelectorAll will return a solid/fixed nodelist (a nodelist that won't be affected even if subsequent javascript codes may change the document). getElementsBy... can be converted into a solid collection of nodes through Array.from()


// --------------------------- TRAVERSING THE DOM
bigDiv.parentNode     // return the parent of "bigDiv"
bigDiv.parentElement  // same as above
bigDiv.parentNode.parentNode.style['background-color'] = 'green'

bigDiv.children       // return a NodeList of "bigDiv"'s children (all of type Element)
bigDiv.childNodes     // return a NodeList of "bigDiv"'s children (type Element) AS WELL AS text nodes (type Text) (*most of the time, you want to use children instead to only access Element nodes)
    // e.g. let el = document.createElement("div");
    //      el.textContent = "foo";

    //      el.childNodes.length === 1; // Contains a Text node child.
    //      el.children.length === 0;   // No Element children.

bigDiv.children[0].style['background-color'] = 'red';
bigDiv.firstElementChild     // return "bigDiv"'s first element child
bigDiv.firstChild            // have similar problem as childNodes
bigDiv.lastElementChild      // return "bigDiv"'s last element child
bigDiv.lastChild             // have similar problem as childNodes

bigDiv.previousElementSibling  // return "bigDiv"'s sibling who is created before it but has the same parent
bigDiv.nextElementSibling


// --------------------------- CREATING ELEMENTS/NODES
let item1 = document.createElement('h1')  // create an element of tag h1 called item1 in memory
let item2 = document.createElement('h2')
let item3 = document.createElement('h3')


// --------------------------- INSERTING NODES
bigDiv.appendChild(item2)    // append item2 to bigDiv, putting it at the end of the list of bigDiv's children
bigDiv.insertBefore(item1, item2) // append the new element item1 to bigDiv, putting it before item2. item2 must also have already been bigDiv's child
bigDiv.replaceChild(item3, item1) // replace item1 in bigDiv with the new element item3. item1 must also have already been bigDiv's child


// --------------------------- EVENTS
// if user clicks anywhere, print "You knocked" to console
window.addEventListener("click", () => {
    console.log("You knocked?");
  });   


// if user clicks on button, print "Button clicked" to console
  button.addEventListener("click", () => {
    console.log("Button clicked.");
  });


// let user click once on button. Subsequent clicks will no longer have any effects
button.addEventListener("click", once);
function once() {
    console.log("Done.");
    button.removeEventListener("click", once);
}


// print out details surrounding when an event was triggered
button.addEventListener('click', (e) => {
    console.log(e.type)         // get event type ("click" in this case)
    console.log(e.clientX);     // Get mouse's x-axis location when activating the event (i.e. clicking the button), coordinate starting from left of page/browser/window
    console.log(e.clientY);     // Get mouse's y-axis location when button was clicked, coordinate starting from top of page/browser/window
    console.log(e.offsetX);     // Get mouse's x-axis location when button was clicked, coordinate starting from left of clicked object
    console.log(e.offsetY);     // Get mouse's y-axis location when button was clicked, coordinate starting from top of clicked object
    console.log(e.altKey);     // Check if alt key was held when button was clicked
})


// add a dot under mouse pointer at every clicks (simple drawing program)
//  CSS:
//      .dot {
//          height: 8px; width: 8px;
//          border-radius: 4px; /* rounds corners */
//          background: blue;
//          position: absolute;
//      } 
// JS: 
window.addEventListener("click", (e) => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style['left'] = (e.pageX - 4) + "px"; // set position of dot relative to page's left
    dot.style['top'] = (e.pageY - 4) + "px";  // set position of dot relative to page's top
    document.body.appendChild(dot);
});


// Bubbling/propagation: if e.g. all elements in a nesting structure have eventListener "click":
    /* HTML:
        <div id="a" style="border: solid black; height: 100px">
            <div id="b" style="border: solid black; height: 50px"> 
                <div id="c" style="border: solid black; height: 30px"> 
                <div> 
            </div>
        </div>

        JS:
            allDivs = document.querySelectorAll("div");
            allDivs.forEach(div => div.addEventListener("click", () => {
                console.log('this is clicked');
                // e.stopPropagation();        
            }))
    => when div id "c" is clicked, both "a" and "b" are also clicked
    => if e.stopPropagation() is added, each div clicked will not affect its parents
    */


// Print different logs with different mouse button combinations pressed
button.addEventListener("mousedown", (e) => {
    switch(e.button) {
        case 0:
            console.log("Left button");
            break;
        case 1:
            console.log("Middle button");
            break;
        case 2:
            console.log("Right button");
            break;
    }
  });


// print to console when both space and ctrl are pressed
window.addEventListener("keydown", (e) => {
    if (e.key == " " && e.ctrlKey) {
      console.log("Continuing!");
    }
  });


// Make page's background to violet when "V" key is held, back to white when "V" key is released. 
// Make page's background to green when "C" key is pressed
window.addEventListener("keydown", (e) => {
    if (e.key == "v") {
        document.body.style['background-color'] = "violet";
    }
});
window.addEventListener("keyup", (e) => {
    if (e.key == "v") {
        document.body.style['background-color'] = "";
    }
});
window.addEventListener("keypress", (e) => {
    if (e.key == "c") {
        document.body.style['background-color'] = "green";
    }
});


// Display text for "help" element according to which input fields are being typed on (i.e. "focus" event), and remove text when it is no longer focused (i.e. "blur" event)
let help = document.querySelector("#help");
let inputFields = document.querySelectorAll("input");
for (let field of Array.from(inputFields)) {
    field.addEventListener("focus", (e) => {
        let text = e.target.getAttribute("data-help");
        // let text = e.target.getAttribute("data-help");  // this is fine too
        help.textContent = text;
    });
    field.addEventListener("blur", () => {
        help.textContent = "";
    });
}


// other inputBox events
inputBox.addEventListener("cut", () => {})  // when text inside an input element is cut
inputBox.addEventListener("paste", () => {})  // when text inside an input element is pasted in
inputBox.addEventListener("input", () => {})  // when text inside an input element is changed in any way (including typing, cutting, pasting...)


// selecting from a list events
selectBox.addEventListener("change", () => {})  // "input" event also works


// form events
form.addEventListener("submit", () => {     // when a form is submitted
    e.preventDefault();  // by default, form elements submit user inputs and reset themselves immediately. This line is to prevent that default behavior. This can also be used with other types of elements too. BUT BEWARE, this may annoy users as they won't get the behaviors they expected
    console.log(e.type);
    
})  


// mouse movement events
button.addEventListener('mouseenter', () => {})  // when mouse hovering over an element. Won't trigger when entering a child
button.addEventListener('mouseover', () => {})  // when mouse hovering over an element. Hovering over CHILD elements triggers this again
button.addEventListener('mouseleave', () => {})  // when mouse left an element. Won't trigger when leaving a child
button.addEventListener('mouseout', () => {})  // when mouse left an element. Leaving CHILD elements triggers this also, even if mouse still inside the parent element
button.addEventListener('mousemove', (e) => {
    textbox.innerHTML = '<h3>MouseX: ' + e.offsetX + 
                   '</h3><h3>MouseY: ' + e.offsetY  // Displays and constantly updates mouse location inside the textbox whenever mouse moves inside the button
    textbox.style['background-color'] = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";  // change textbox's background to different colors depending on mouse's location whenever mouse moves inside the button
})


// Timeout: set time before a function will run
let bombTimer = setTimeout(() => {
    console.log("BOOM!");
  }, 500);   // function will run after 500 millisecs (bomb will explode)
  
if (Math.random() < 0.5) {          // 50% chance
    console.log("Defused.");
    clearTimeout(bombTimer);        // if condition met, clear timeout AND the function within it
  }


// Repeat printing "tick" to console every 200 millisecs. Stop after printing 10 ticks
let ticks = 0;
let clock = setInterval(() => {
    console.log("tick", ticks++);
    if (ticks == 10) {
        clearInterval(clock);
        console.log("stop.");
    } 
}, 200);


// Wait for 500 millisecs after user stops typing/cutting/pasting before printing to console "Typed!". If user types/cuts/pastes/does anything within the inputBox before 500 millisecs are up, clear timeout and start the timer again
let inputBox = document.querySelector(".input-box");
let timeout;
inputBox.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log("Typed!"), 500);
});

