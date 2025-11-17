//your JS code here. If required.
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function wait(ms){
	return new Promise(resolve=>setTimeout(resolve,ms));
}

bt.addEventListener("click",async()=>{
	const text = document.getElementById("text").value;
	const delay = Number(document.getElementById("delay").value);

	output.textContent = "";
	await wait(delay);

	output.textContent = text;
});