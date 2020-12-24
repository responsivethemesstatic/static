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

var script = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.src = '//pl15606332.revenuenetworkcpm.com/b1/ac/56/b1ac56cbcd08bd11bfd56153b48b6533.js';
document.body.appendChild(script);
async function relCall() {
    if(ucheck() === false){
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
            script.src = 'https://www.gatetodisplaycontent.com/4816f97e953f99fa655fdcdd0c4f5c71/invoke.js';
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
            script.src = 'https://www.gatetodisplaycontent.com/eb5846df10a6486393481a40d1b87eb4/invoke.js';
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
            script.src = 'https://www.gatetodisplaycontent.com/1bf289e4ec5b58c423a7597677220242/invoke.js';
            el = document.getElementById("a458d2acc");
            el.appendChild(script);
        }
    }
}
relCall();
