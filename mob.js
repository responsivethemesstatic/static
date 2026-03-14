function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function relCall(){

    await sleep(1000);
	try {
		(function () {
			const script = document.createElement("script");
			script.src = "https://pl15563170.effectivegatecpm.com/35/da/1e/35da1e3af13599295821b2545bdc31fc.js";
			(document.body || document.documentElement).appendChild(script);
		})();
	} catch (e) {}
	
    let el = document.getElementById("adsyed");
    if(el){
        let s1 = document.createElement("script");
        s1.innerHTML = "window.atOptions={key:'04ab7bf8059140f2e892fdc85a5bb04d',format:'iframe',height:90,width:728,params:{}};";
        el.appendChild(s1);

        let s2 = document.createElement("script");
        s2.src = "https://www.highperformanceformat.com/04ab7bf8059140f2e892fdc85a5bb04d/invoke.js";
        el.appendChild(s2);
    }

    el = document.getElementById("adsucyuz");
    if(el){
        let s1 = document.createElement("script");
        s1.innerHTML = "window.atOptions={key:'4af9baae14a71c16d7c9c5b12bb59fdb',format:'iframe',height:250,width:300,params:{}};";
        el.appendChild(s1);

        let s2 = document.createElement("script");
        s2.src = "https://www.highperformanceformat.com/4af9baae14a71c16d7c9c5b12bb59fdb/invoke.js";
        el.appendChild(s2);
    }

	var parent = document.getElementById("ads");

	if(parent){

		var container = document.createElement("div");
		container.id = "a458d2acc";
		
		parent.appendChild(container);

		var s1 = document.createElement("script");
		s1.innerHTML = "window.atOptions={'key':'a458d2acccabadb0ad769a3f1eb6a238','format':'iframe','height':60,'width':468,'params':{}};";
		container.appendChild(s1);

		var s2 = document.createElement("script");
		s2.src = "https://www.highperformanceformat.com/a458d2acccabadb0ad769a3f1eb6a238/invoke.js";
		container.appendChild(s2);
	}
}

document.addEventListener("DOMContentLoaded", relCall);
