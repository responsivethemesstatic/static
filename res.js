function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl16561963.highrevenuegate.com/f5/73/2f/f5732f8ef13b81d67efb19cf1589fed0.js';
    document.body.appendChild(script);
})();
async function relCall() {
        var script, el;
        await sleep(1000);
        if(document.getElementById("top_720")){
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = "atOptions = {'key' : '9517a4efa0af3fead641c773740cb25f','format' : 'iframe','height' : 90,'width' : 728,'params' : {} 	};";
            var el = document.getElementById("top_720");
            el.appendChild(script);
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.profitabledisplaynetwork.com/9517a4efa0af3fead641c773740cb25f/invoke.js';
            var el = document.getElementById("top_720");
            el.appendChild(script);
        }
        await sleep(3000);
        if(document.getElementById("sidebar_300")){
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = "atOptions = {'key' : '90073778d39cc0a40947c56562a933d5','format' : 'iframe','height' : 250,'width' : 300,'params' : {} 	};";
            var el = document.getElementById("sidebar_300");
            el.appendChild(script);
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.profitabledisplaynetwork.com/90073778d39cc0a40947c56562a933d5/invoke.js';
            var el = document.getElementById("sidebar_300");
            el.appendChild(script);
        }
        await sleep(3000);
        if(document.getElementById("in_post_bottomads")){
            script = document.createElement('div');
            script.id = 'a458d2acc';
            var el = document.getElementById("in_post_bottomads");
            el.appendChild(script);
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = "atOptions = {'key' : '3a70c20c4dd4363472d820cab195c162','format' : 'iframe','height' : 60,'width' : 468,'params' : {} 	};";
            var el = document.getElementById("a458d2acc");
            el.appendChild(script);
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.profitabledisplaynetwork.com/3a70c20c4dd4363472d820cab195c162/invoke.js';
            var el = document.getElementById("a458d2acc");
            el.appendChild(script);
        }
}



relCall();

document.head.insertAdjacentHTML("beforeend", `<style>.adp {
	display: flex;
	box-sizing: border-box;
	flex-flow: column;
	position: fixed;
	z-index: 99999;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	height: 400px;
	background-color: #ffffff;
	padding: 20px;
	border-radius: 5px;
}
.adp h3 {
	border-bottom: 1px solid #eee;
	margin: 0;
	padding: 15px 0;
	text-align: center;
}
.adp p {
	 flex-grow: 1;
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
