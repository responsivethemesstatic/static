(function() {
if(document.getElementById("adsyed")){
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = "atOptions = {'key' : '04ab7bf8059140f2e892fdc85a5bb04d','format' : 'iframe','height' : 90,'width' : 728,'params' : {} 	};";
	var el = document.getElementById("adsyed");
    el.appendChild(script);
	var script = document.createElement('script');
	script.defer = true;
    script.type = 'text/javascript';
    script.src = 'https://www.madcpms.com/04ab7bf8059140f2e892fdc85a5bb04d/invoke.js';
    var el = document.getElementById("adsyed");
    el.appendChild(script);
}
})();

