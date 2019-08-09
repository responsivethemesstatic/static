var loc= window.location.href.toString(); 
var res = loc.match(/http.*:\/\/(.*).blogspot./);
if(res[1] === "testertser"){
    if ($("#adsyed").length) {
        document.getElementById("adsyed").innerHTML = '<center><iframe src="https://coinmedia.co/new_code_site120523.js?ic" scrolling="no" frameborder="0" width="728px" height="90px"></iframe></center>';  
    }
}
if ($("#ads").length) {
       document.getElementById("ads").innerHTML = '<center><a href="http://corneey.com/w22j1h" target="_blank"><img src="https://rollercoin.com/static/img/referral/banners/ref_72890.gif" width="728" height="90" border="0" alt="" /></a></center>'; 
    }
