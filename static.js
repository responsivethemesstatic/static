var iframe = document.createElement('iframe');
var html = '<!DOCTYPE html> <html> <head> <meta name="referrer" content="no-referrer" /> <meta name="referrer" content="none"><style>body {margin:0;}</style> </head> <body> <iframe src="https://www.earnsaton.tk" style="border:0px;padding:0;width:100%;position: absolute; height: 100%;" allowtransparency="true" referrerpolicy="no-referrer"></iframe> </body> </html>';
iframe.setAttribute('referrerpolicy', 'no-referrer');
iframe.setAttribute('allowtransparency', 'true');
iframe.setAttribute('scrolling', 'no');
iframe.setAttribute('style', 'margin:10px;max-width: 100%;border:0px; padding:0; width:758px; height:100px; overflow:hidden');
iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
document.body.appendChild(iframe);
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(html);
iframe.contentWindow.document.close();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function Tutor() {
	await sleep(1000);
	if(document.getElementById("adsyed")){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.text = "atOptions = {'key' : '04ab7bf8059140f2e892fdc85a5bb04d','format' : 'iframe','height' : 90,'width' : 728,'params' : {} 	};";
		var el = document.getElementById("adsyed");
		el.appendChild(script);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://www.topdisplaynetwork.com/04ab7bf8059140f2e892fdc85a5bb04d/invoke.js';
		var el = document.getElementById("adsyed");
		el.appendChild(script);
	}
	await sleep(3000);
	if(document.getElementById("adsucyuz")){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.text = "atOptions = {'key' : '4af9baae14a71c16d7c9c5b12bb59fdb','format' : 'iframe','height' : 250,'width' : 300,'params' : {} 	};";
		var el = document.getElementById("adsucyuz");
		el.appendChild(script);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://www.topdisplaynetwork.com/4af9baae14a71c16d7c9c5b12bb59fdb/invoke.js';
		var el = document.getElementById("adsucyuz");
		el.appendChild(script);
	}
	await sleep(3000);
	if(document.getElementById("ads")){
		var script = document.createElement('center');
		script.id = 'a458d2acc';
		var el = document.getElementById("ads");
		el.appendChild(script);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.text = "atOptions = {'key' : 'a458d2acccabadb0ad769a3f1eb6a238','format' : 'iframe','height' : 60,'width' : 468,'params' : {} 	};";
		var el = document.getElementById("a458d2acc");
		el.appendChild(script);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://www.topdisplaynetwork.com/a458d2acccabadb0ad769a3f1eb6a238/invoke.js';
		var el = document.getElementById("a458d2acc");
		el.appendChild(script);
	}
}
Tutor();
