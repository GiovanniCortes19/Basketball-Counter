// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;
let countEl = document.getElementById("count-el");

function increment(n) {
  count += n;
  countEl.textContent = count;
}

// create a function, save(), that logs out the count whent its is called
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

let saveEl = document.getElementById("save-el");

function save() {
  let saveCount = `${count} - `;
  saveEl.textContent += saveCount;
  count = 0;
  countEl.innerText = count;
}
