let d = new Date();
let timezone = d.getTimezoneOffset();

let year = d.getUTCFullYear()
let month = d.getUTCMonth()
let day = d.getUTCDate()

let datum = new Date(Date.UTC(year, month, day, timezone/60, 0, 0, 0));

let timestamp = `<t:${datum.getTime()/1000}:t>`

console.log(timestamp)

// Replace the timestamp in the input box with the calculated timestamp
// Get the input box's text
let input = document.querySelector("#timezone");
let text = input.value;
// Replace the timestamp with the calculated timestamp (regex matches anything between <t: and :t>)
text = text.replace(/<t:.*:t>/, timestamp);
// Set the input box's text to the new text
input.value = text;

// The reset button
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
	  input.value = `Midnight in my timezone is <t:${datum.getTime()/1000}:t>`;
});

// The copy button
let copy = document.querySelector("#copy");
copy.addEventListener("click", () => {
	  input.select();
	  document.execCommand("copy");
});