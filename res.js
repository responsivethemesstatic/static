function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function relCall(){
	try {
		(function () {
			const script = document.createElement("script");
			script.src = "https://pl16561963.effectivegatecpm.com/f5/73/2f/f5732f8ef13b81d67efb19cf1589fed0.js";
			(document.body || document.documentElement).appendChild(script);
		})();
	} catch (e) {}
    await sleep(1000);
	try {
		let el = document.getElementById("top_720");
		if(el){
			let s1 = document.createElement("script");
			s1.innerHTML = "atOptions={key:'9517a4efa0af3fead641c773740cb25f',format:'iframe',height:90,width:728,params:{}};";
			el.appendChild(s1);

			let s2 = document.createElement("script");
			s2.src = "https://www.highperformanceformat.com/9517a4efa0af3fead641c773740cb25f/invoke.js";
			el.appendChild(s2);
		}
	} catch (e) {}
    await sleep(1000);
	try {
		el = document.getElementById("sidebar_300");
		if(el){
			let s1 = document.createElement("script");
			s1.innerHTML = "atOptions={key:'90073778d39cc0a40947c56562a933d5',format:'iframe',height:250,width:300,params:{}};";
			el.appendChild(s1);

			let s2 = document.createElement("script");
			s2.src = "https://www.highperformanceformat.com/90073778d39cc0a40947c56562a933d5/invoke.js";
			el.appendChild(s2);
		}
	} catch (e) {}
    await sleep(1000);
	try {
		var parent = document.getElementById("in_post_bottomads");

		if(parent){

			var container = document.createElement("div");
			container.id = "a458d2acc";
			parent.appendChild(container);

			var s1 = document.createElement("script");
			s1.innerHTML = "atOptions={'key':'3a70c20c4dd4363472d820cab195c162','format':'iframe','height':60,'width':468,'params':{}};";
			container.appendChild(s1);

			var s2 = document.createElement("script");
			s2.src = "https://www.highperformanceformat.com/3a70c20c4dd4363472d820cab195c162/invoke.js";
			container.appendChild(s2);
			
		}
	} catch (e) {}
}

document.addEventListener("DOMContentLoaded", relCall);
