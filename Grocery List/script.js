let count = 0;
let message = document.querySelector("h3");

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }

  count = count + 1;
  changeMessage();
}

// Create a "close" button and append it to each list item
let deleteItem = document.getElementsByTagName("li");
let ix;
for (ix = 0; ix < deleteItem.length; ix++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7"); // x symbol
  span.className = "close";
  span.appendChild(txt);
  deleteItem[ix].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
    value = count - 1;
    changeMessage();
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

///Change tittle

function changeMessage() {
  if (count >= 3) {
    message.textContent = "That's a big trip";
  } else if (count === 2) {
    message.textContent = "That's a medium size trip";
  } else if (count === 1) {
    message.textContent = "That's a small trip";
  } else {
    message.textContent = "No groceries!";
  }
}