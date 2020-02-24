var x = document.createElement("center");
x.style = 'margin-top: 5px;max-width: 90%;overflow: hidden';
x.innerHTML = '<iframe data-aa="1332633" src="//acceptable.a-ads.com/1332633" scrolling="no" style="border:0px; padding:0; width:100%; height:100%; overflow:hidden" allowtransparency="true"></iframe>';
document.body.appendChild(x);
function retirn(val) {
    try {
        return document.querySelector('#'+val+' > iframe').contentWindow.document.getElementsByTagName("a")[0].innerHTML.length;        
    } catch (e) {
        return 0;
    }
};
var d = 0;
myTimer();
var myVar = setInterval(myTimer, 2000);
function myTimer() {
	if(document.getElementById("adsyed")){
		if(5 > retirn("adsyed")){
			document.getElementById("adsyed").innerHTML = "";
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.text = "atOptions = {'key' : '04ab7bf8059140f2e892fdc85a5bb04d','format' : 'iframe','height' : 90,'width' : 728,'params' : {} 	};";
			var el = document.getElementById("adsyed");
			el.appendChild(script);
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://www.madcpms.com/04ab7bf8059140f2e892fdc85a5bb04d/invoke.js';
			var el = document.getElementById("adsyed");
			el.appendChild(script);
		}
	}
	if(document.getElementById("adsucyuz")){
		if(5 > retirn("adsucyuz")){
			document.getElementById("adsucyuz").innerHTML = "";
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.text = "atOptions = {'key' : '4af9baae14a71c16d7c9c5b12bb59fdb','format' : 'iframe','height' : 250,'width' : 300,'params' : {} 	};";
			var el = document.getElementById("adsucyuz");
			el.appendChild(script);
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://www.madcpms.com/4af9baae14a71c16d7c9c5b12bb59fdb/invoke.js';
			var el = document.getElementById("adsucyuz");
			el.appendChild(script);
		}
	}
	if(document.getElementById("ads")){
		if(5 > retirn("a458d2acc")){
			document.getElementById("ads").innerHTML = "";
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
			script.src = 'https://www.madcpms.com/a458d2acccabadb0ad769a3f1eb6a238/invoke.js';
			var el = document.getElementById("a458d2acc");
			el.appendChild(script);
		}
	}
  d = d+1;
  if(d > 10){
  clearInterval(myVar);
  }
}
