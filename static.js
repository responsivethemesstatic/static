function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function Tutor() {
if(document.getElementById("adsyed")){
	var scriptn = document.createElement('script');
	scriptn.async = true;
    scriptn.type = 'text/javascript';
    scriptn.src = 'https://www.madcpms.com/04ab7bf8059140f2e892fdc85a5bb04d/invoke.js';
	scriptn.onload = scriptn.onreadystatechange = function () {
	atOptions = {
		'key' : '04ab7bf8059140f2e892fdc85a5bb04d',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
	};
    var elemn = document.getElementById("adsyed");
    elemn.appendChild(scriptn);
}
await sleep(1000);
if(document.getElementById("adsucyuz")){
	var scriptb = document.createElement('script');
	scriptb.async = true;
    scriptb.type = 'text/javascript';
    scriptb.src = 'https://www.madcpms.com/4af9baae14a71c16d7c9c5b12bb59fdb/invoke.js';
	scriptb.onload = scriptb.onreadystatechange = function () {
	atOptions = {
		'key' : '4af9baae14a71c16d7c9c5b12bb59fdb',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};};
    var elemd = document.getElementById("adsucyuz");
    elemd.appendChild(scriptb);
}
await sleep(1000);
if (document.getElementById("ads")) {
	var scriptbv = document.createElement('script');
	scriptbv.async = true;
    scriptbv.type = 'text/javascript';
    scriptbv.src = 'https://www.madcpms.com/a458d2acccabadb0ad769a3f1eb6a238/invoke.js';
	scriptbv.onload = scriptbv.onreadystatechange = function () {	
	atOptions = {
		'key' : 'a458d2acccabadb0ad769a3f1eb6a238',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};};
    var elemdv = document.getElementById("ads");
    elemdv.appendChild(scriptbv);
}
}
Tutor();
