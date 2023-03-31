// inicio js FAQ's
var faq = document.getElementsByClassName("faq-page");
	var i;

	for (i = 0; i < faq.length; i++) {


        // if (i => 1){console.log("maior que um")} 
        // if (i => 1){console.log("total de i" . i)} 


		faq[i].addEventListener("click", function () {
			/* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
			this.classList.toggle("active");

			/* Toggle between hiding and showing the active panel */
			var body = this.nextElementSibling
			if (body.style.display === "block") {
				body.style.display = "none";
			} else {
				body.style.display = "block";
			}
		});
	}
// FIM js FAQ's



(function(){
	let YouTubeContainers = document.querySelectorAll(".embed-youtube");
  
	// Iterate over every YouTube container you may have
	for (let i = 0; i < YouTubeContainers.length; i++) {
	  let container = YouTubeContainers[i];
	  let imageSource = "https://img.youtube.com/vi/"+ container.dataset.videoId +"/sddefault.jpg"; 
  
	  // Load the Thumbnail Image asynchronously
	  let image = new Image();
	  image.src = imageSource;
	  image.addEventListener("load", function() {
		container.appendChild(image);
	  });
  
	  // When the user clicks on the container, load the embedded YouTube video
	  container.addEventListener("click", function() {
		let iframe = document.createElement( "iframe" );
  
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("allowfullscreen", "");
		iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
		// Important: add the autoplay GET parameter, otherwise the user would need to click over the YouTube video again to play it 
		iframe.setAttribute("src", "https://www.youtube.com/embed/"+ this.dataset.videoId +"?rel=0&showinfo=0&autoplay=1");
  
		// Clear Thumbnail and load the YouTube iframe
		this.innerHTML = "";
		this.appendChild( iframe );
	  });
	}
  })();