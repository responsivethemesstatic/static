function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function relCall(){

    await sleep(1000);
	try {
		(function () {
			const script = document.createElement("script");
			script.src = "https://pl15606332.effectivegatecpm.com/b1/ac/56/b1ac56cbcd08bd11bfd56153b48b6533.js";
			(document.body || document.documentElement).appendChild(script);
		})();
	} catch (e) {}
	
    let el = document.getElementById("top_720");
    if(el){
        let s1 = document.createElement("script");
        s1.innerHTML = "window.atOptions={key:'4816f97e953f99fa655fdcdd0c4f5c71',format:'iframe',height:90,width:728,params:{}};";
        el.appendChild(s1);

        let s2 = document.createElement("script");
        s2.src = "https://www.highperformanceformat.com/4816f97e953f99fa655fdcdd0c4f5c71/invoke.js";
        el.appendChild(s2);
    }

    el = document.getElementById("sidebar_300");
    if(el){
        let s1 = document.createElement("script");
        s1.innerHTML = "window.atOptions={key:'eb5846df10a6486393481a40d1b87eb4',format:'iframe',height:250,width:300,params:{}};";
        el.appendChild(s1);

        let s2 = document.createElement("script");
        s2.src = "https://www.highperformanceformat.com/eb5846df10a6486393481a40d1b87eb4/invoke.js";
        el.appendChild(s2);
    }

	var parent = document.getElementById("in_post_bottomads");

	if(parent){

		var container = document.createElement("div");
		container.id = "a458d2acc";
		
		parent.appendChild(container);

		var s1 = document.createElement("script");
		s1.innerHTML = "window.atOptions={'key':'1bf289e4ec5b58c423a7597677220242','format':'iframe','height':60,'width':468,'params':{}};";
		container.appendChild(s1);

		var s2 = document.createElement("script");
		s2.src = "https://www.highperformanceformat.com/1bf289e4ec5b58c423a7597677220242/invoke.js";
		container.appendChild(s2);
	}
}

document.addEventListener("DOMContentLoaded", relCall);
