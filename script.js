document.getElementById("btn").addEventListener("click",async function(){
	const text = document.getElementById("text").value;
	const delay = parseInt(document.getElementById("delay").value,10);
	const output = document.getElementById("output");

	output.textContent ="";

	if(!text || isNaN(delay) || delay < 0){
		output.textContent = "Please enter valid text and a positive delay.";
		return;
		
	}

	function delayMessage(ms){
		return new Promise(resolve =>setTimeout(resolve,ms));
		
	}
	await delayMessage(delay);
	output.textContent ="text";
});
