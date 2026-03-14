function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function relCall(){

    await sleep(1000);
	try {
		(function () {
			const script = document.createElement("script");
			script.src = "https://pl16561963.highrevenuegate.com/f5/73/2f/f5732f8ef13b81d67efb19cf1589fed0.js";
			(document.body || document.documentElement).appendChild(script);
		})();
	} catch (e) {}
}

document.addEventListener("DOMContentLoaded", relCall);
