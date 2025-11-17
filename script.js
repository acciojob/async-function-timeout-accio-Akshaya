//your JS code here. If required.
const btn = document.getElementById("btn");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay")
const output = document.getElementById("output");

async function showMessage(){
	const message = textInput.value;
	const delay = Number(textInput.value);

	await new Promise(resolve=>queueMicrotask(resolve));

	await new Promise(resolve=>{
		const end = performance.now()+delay;

		function check(){
			if(performance.now()=>end) resolve();
			else requestAnimationFrame(check);
		}
		requestAnimationFrame(check);
	})
	output.textContent = message;
}
btn.addEventListener("click",showMessage);
