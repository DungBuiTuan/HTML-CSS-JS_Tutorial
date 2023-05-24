const h1 = document.createElement("h1");
const underline = document.createElement("u");
underline.innerText = "Hello";
//h1.innerHTML = "<u>Hello</u>";
h1.append(underline);
document.body.append(h1);

const h2 = document.createElement("h2");
const italic = document.createElement("i");
italic.innerText = "Hello";
//h1.innerHTML = "<u>Hello</u>";
h2.append(italic);
document.body.append(h2);

const p = document.createElement("p");
const bold = document.createElement("b");
bold.innerText = "Hello";
//h1.innerHTML = "<u>Hello</u>";
p.append(bold);
document.body.append(p);

//modify html element
document.querySelector("#button").onclick = function() {
    const h1 = document.querySelector("#alo");
    const underline = document.createElement("u");
    h1.innerText = "bye";
    h1.append(underline);

    const p = document.querySelectorAll(".myc");
    //p[0].innerHTML = "wwao"; for eachone
    p.forEach((element) => (element.innerHTML = "wao!"));
    const button = document.querySelector("button");
    button.remove();
};

if ('WebSocket' in window) {
    (function() {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function(msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
} else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}