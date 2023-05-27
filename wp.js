function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
if(document.getElementById("extra_bottomads")){
    document.getElementById("extra_bottomads").innerHTML='<a href="https://bit.ly/39sJ4zI"><img title="Join Cointiply to Earn Free Bitcoin!" alt="Earn Free Bitcoin" src="https://cointiply.com/img/promo/banners/1_728x90.gif" width=600" height="80"></a>';
}
(function() {
var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//pl15606332.highrevenuegate.com/b1/ac/56/b1ac56cbcd08bd11bfd56153b48b6533.js';
  document.body.appendChild(script);
})();
async function relCall() {
        var script, el;
        await sleep(1000);
        if(document.getElementById("top_720")){
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = "atOptions = {'key' : '4816f97e953f99fa655fdcdd0c4f5c71','format' : 'iframe','height' : 90,'width' : 728,'params' : {} 	};";
            el = document.getElementById("top_720");
            el.appendChild(script);
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.profitabledisplaynetwork.com/4816f97e953f99fa655fdcdd0c4f5c71/invoke.js';
            el = document.getElementById("top_720");
            el.appendChild(script);
        }
        await sleep(3000);
        if(document.getElementById("sidebar_300")){
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = "atOptions = {'key' : 'eb5846df10a6486393481a40d1b87eb4','format' : 'iframe','height' : 250,'width' : 300,'params' : {} 	};";
            el = document.getElementById("sidebar_300");
            el.appendChild(script);
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.profitabledisplaynetwork.com/eb5846df10a6486393481a40d1b87eb4/invoke.js';
            el = document.getElementById("sidebar_300");
            el.appendChild(script);
        }
        await sleep(3000);
        if(document.getElementById("in_post_bottomads")){
            script = document.createElement('center');
            script.id = 'a458d2acc';
            el = document.getElementById("in_post_bottomads");
            el.appendChild(script);
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = "atOptions = {'key' : '1bf289e4ec5b58c423a7597677220242','format' : 'iframe','height' : 60,'width' : 468,'params' : {} 	};";
            el = document.getElementById("a458d2acc");
            el.appendChild(script);
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.profitabledisplaynetwork.com/1bf289e4ec5b58c423a7597677220242/invoke.js';
            el = document.getElementById("a458d2acc");
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
