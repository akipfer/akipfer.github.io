// Inicio dev stuff aqui //
dev = 1;
function linksParaFixar(dev) {
	if (dev == 1) {
		var listaDeLinks = document.getElementsByTagName("a");
		for (var i = 0; i < listaDeLinks.length; i++) {
			listaDeLinks[i].href = "javascript:void(0);";
			listaDeLinks[i].target = "_self";
			console.log("Rodou de boas");
		}
	}
}
// fim dev stuff here //

//G.TAG Manager
(function (w, d, s, l, i) {
	w[l] = w[l] || [];
	w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
	var f = d.getElementsByTagName(s)[0],
		j = d.createElement(s),
		dl = l != "dataLayer" ? "&l=" + l : "";
	j.async = true;
	j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
	f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-5VPW9N4");

//google gtag
window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "AW-10943383813");

//gtag event
gtag("event", "conversion", {
	send_to: "AW-10943383813/fyQzCNvMycsDEIWSm-Io",
});

