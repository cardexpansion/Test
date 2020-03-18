function onResize()
{
	updateFrontCard(currentFrontCardUrl);		
	
	var sizes = document.getElementById("cardGallerySizeComparisment");	
	
	setCardGallerySize(sizes.offsetWidth, sizes.offsetHeight);	
	
	var textContent = document.getElementsByClassName("textContent");
	var newFont = sizes.offsetWidth/70.0;
	for (i = 0; i < textContent.length; i++)
	{
		textContent[i].style.fontSize = newFont.toString() + "px";
		textContent[i].style.padding = (2*newFont).toString() + "px";
	}
}