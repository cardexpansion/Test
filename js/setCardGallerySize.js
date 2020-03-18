function setCardGallerySize(containerWidth, containerHeight)
{
	var ratio = 0.20*0.65; // width of a card to the width of the screen
	
	var allCards = document.getElementsByClassName("cardimage");
	var cardAmount = allCards.length;	
	
	var cardGallery = document.getElementById("cardGallery");
	
	cardGallery.style.marginTop = ((containerHeight - cardAmount*0.20*containerWidth*ratio*569/400)/2).toString() + 'px';
	
	for (var i=0; i < cardAmount; i++)
	{
		setCardDimensions(allCards[i], containerWidth*ratio);	
	}
}