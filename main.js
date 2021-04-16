let editor = null;
let suggester = null;
let dontknower = null;
let displayer = null;
let reducer = "";
let ul = document.createElement('ul')


function filterKeyevent(key) {
 return reduceArr = keyevent.html_elements.filter(word => word.startsWith(key));
}

async function autoComplete(key){
  if (keyevent && key.match(/[a-z]/i) ) {
   let response = await filterKeyevent(key)
   create_ul(response)
  }
}

function create_ul(filteredArr){
  let li = null;
  filteredArr.forEach(element => {
    li = document.createElement('li');
    li.innerHTML = element;
    li.addEventListener('click', event => {
      li.classList.toggle('large')
      createHtmlElem(li)
    });
    ul.appendChild(li)
  });
  appendchild(suggester,ul)
}

function createHtmlElem(evnt){
  evnt.target
}

function appendchild(parent,child){
  parent.appendChild(child);
}


function print_editor(msg) {
  editor.innerHTML = msg;
}

function print_suggest(msg) {
  suggester.innerHTML += msg;
}

window.onload = () => {
  editor = document.querySelector('.editor');
  suggester = document.querySelector('.suggester');
  dontknower = document.querySelector('.dontknower');
  displayer = document.querySelector('.displayer');

  editor.addEventListener('keyup', (e) => {
    ul.innerHTML = "";
    if (suggester.children.length) {
        while (suggester.firstChild) {
          suggester.removeChild(suggester.firstChild);
      }
    }
    if( e.code == "Backspace" || e.code == "Delete" ) {
      reducer = reducer.slice(0,-1);
     console.log(reducer)
    } else reducer = reducer + e.key ;
    autoComplete(reducer);
  })

  
  editor.focus();

}