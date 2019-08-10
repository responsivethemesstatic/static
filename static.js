var loc= window.location.href.toString(); 
var res = loc.match(/http.*:\/\/(.*).blogspot./);
if(res[1] === "aimeralyn"){
    document.getElementById("adsyed").innerHTML = '<center><iframe src="https://coinmedia.co/new_code_site120525.js?ic" scrolling="no" frameborder="0" width="728px" height="90px"></iframe></center>';
    document.getElementById("adsdort").innerHTML = '<center><iframe src="https://coinmedia.co/new_code_site120526.js?ic" scrolling="no" frameborder="0" width="468px" height="60px"></iframe></center>'; 
    document.getElementById("adsucyuz").innerHTML = '<center><iframe src="https://coinmedia.co/new_code_site120527.js?ic" scrolling="no" frameborder="0" width="300px" height="250px"></iframe></center>';
}
//static
if ($("#ads").length) {
       document.getElementById("ads").innerHTML = '<center><a href="http://corneey.com/w22j1h" target="_blank"><img src="https://rollercoin.com/static/img/referral/banners/ref_72890.gif" width="728" height="90" border="0" alt="" /></a></center>'; 
}
