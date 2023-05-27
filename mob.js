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
		script.src = 'https://www.profitabledisplaynetwork.com/04ab7bf8059140f2e892fdc85a5bb04d/invoke.js';
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
		script.src = 'https://www.profitabledisplaynetwork.com/4af9baae14a71c16d7c9c5b12bb59fdb/invoke.js';
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
		script.src = 'https://www.profitabledisplaynetwork.com/a458d2acccabadb0ad769a3f1eb6a238/invoke.js';
		var el = document.getElementById("a458d2acc");
		el.appendChild(script);
	}
}

(function() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = '//pl15563170.highrevenuegate.com/35/da/1e/35da1e3af13599295821b2545bdc31fc.js';
	document.body.appendChild(script);
})();




Tutor();

document.head.insertAdjacentHTML("beforeend", `<style>.adp {
	display: flex;
	box-sizing: border-box;
	flex-flow: column;
	position: fixed;
	z-index: 99999;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: auto;
	height: auto;
	background-color: #ffffff;
	padding: 20px;
	border-radius: 5px;
}
.adp h3 {
	border-bottom: 1px solid #eee;
	margin: 0;
	padding: 15px 0;
	text-align: center;
	color: black;
}
.adp p {
	 flex-grow: 1;
	 color: black;
}
.adp a {
	display: block;
	text-decoration: none;
	width: 100%;
	background-color: #366ed8;
	text-align: center;
	padding: 10px;
	box-sizing: border-box;
	color: #ffffff;
	border-radius: 5px;
}
.adp a:hover {
	background-color: #3368cc;
}
.adp-underlay {
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 99998;
}</style>`);
var xaddpsts = true;
function addpLoadx(){
	var rxcNum = Math.round(Math.random() * 10000);
	try {
		fetch('https://ads.pubmatic.com/AdServer/js/gshowad.js?d='+rxcNum,{
      method: "HEAD",
      mode: "no-cors",
    }).catch(() => {
			xaddpsts = false;
			let adp_underlay = document.createElement('div');
			adp_underlay.className = 'adp-underlay';
			document.body.appendChild(adp_underlay);
			let adp = document.createElement('div');
			adp.className = 'adp';
			adp.innerHTML = `
				<h3>Ad Blocker Detected!</h3>
				<p>We use advertisements to keep our website online, could you please whitelist our website, thanks!</p>
				<p></p>
				<p></p>
				<p></p>
				<a href="#">Refresh page</a>
			`;
			document.body.appendChild(adp);
			adp.querySelector('a').onclick = e => {
				e.preventDefault();
				document.body.removeChild(adp_underlay);
				document.body.removeChild(adp);
				xaddpsts = true;
				window.location.reload();
			};
		});
	}
	catch(err) {
	  xaddpsts = true;
	}
}
var networkchecker = window.setInterval(function(){
	if (xaddpsts){
		window.onload=addpLoadx();
	}
},7000);
