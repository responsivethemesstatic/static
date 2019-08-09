var loc= window.location.href.toString(); 
var res = loc.match(/http.*:\/\/(.*).blogspot./);
if(res[1] === "testertser"){
    if ($("#adsyed").length) {
        document.getElementById("adsyed").innerHTML = '<center><iframe src="https://coinmedia.co/new_code_site120523.js?ic" scrolling="no" frameborder="0" width="728px" height="90px"></iframe></center>';  
    }
}
