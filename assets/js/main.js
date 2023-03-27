// Inicio dev stuff aqui //

function linksParaFixar(dev) {
	dev = 1;
	if (dev == 1) {
		var listaDeLinks = document.getElementsByTagName("a");
		for (var i = 0; i < listaDeLinks.length; i++) {
			listaDeLinks[i].href = "javascript:void(0);";
			listaDeLinks[i].target = "_self";
			//console.log("Rodou de boas");
		}
	}
}
// fim dev stuff here //
