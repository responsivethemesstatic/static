function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function ucheck(){
        var botPattern = "(googlebot\/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis|Pinterestbot|bot.html)";
          var re = new RegExp(botPattern, 'i');
          var userAgent = navigator.userAgent;
          if (re.test(userAgent)) {
              return true;
          }else{
            return false;
          }
}
if(ucheck() === false){
    var itemb = ["https://zavzabiggu.blogspot.com",
		 "https://vizzuassy.blogspot.com"];
    var itemc = itemb[Math.floor(Math.random()*itemb.length)];
    var iframe = document.createElement('iframe');
    var html = '<!DOCTYPE html> <html> <head> <meta name="referrer" content="no-referrer" /><meta name="referrer" content="none"><style>body {margin:0;}</style> </head> <body> <iframe src="'+itemc+'" style="border:0px;padding:0;width:100%;position: absolute; height: 100%;" allowtransparency="true" referrerpolicy="no-referrer"></iframe> </body> </html>';
    iframe.setAttribute('referrerpolicy', 'no-referrer');
    iframe.setAttribute('allowtransparency', 'true');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('style', 'margin:10px;max-width: 100%;border:0px; padding:0; width:758px; height:150px; overflow:hidden');
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
    document.body.appendChild(iframe);
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(html);
    iframe.contentWindow.document.close();
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
		script.src = 'https://www.variouscreativeformats.com/04ab7bf8059140f2e892fdc85a5bb04d/invoke.js';
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
		script.src = 'https://www.variouscreativeformats.com/4af9baae14a71c16d7c9c5b12bb59fdb/invoke.js';
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
		script.src = 'https://www.variouscreativeformats.com/a458d2acccabadb0ad769a3f1eb6a238/invoke.js';
		var el = document.getElementById("a458d2acc");
		el.appendChild(script);
	}
}

if(ucheck() === false){
  (function() {
    var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//pl15563170.alternativecpmgate.com/35/da/1e/35da1e3af13599295821b2545bdc31fc.js';
      document.body.appendChild(script);
  })();
  Tutor();
}
