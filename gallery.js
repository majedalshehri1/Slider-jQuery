let NumberOfCurrentImage = 0; 
const images = $(".image")
let totalImage = images.length

// Next Button
$("#nextButton").click(function(){
    $(images[NumberOfCurrentImage]).hide()
    NumberOfCurrentImage = ( NumberOfCurrentImage + 1 ) % totalImage
    $(images[NumberOfCurrentImage]).show()
})

// Previous Button
$("#prevButton").click(function(){
    $(images[NumberOfCurrentImage]).hide()
    NumberOfCurrentImage = ( ( NumberOfCurrentImage - 1 )  + totalImage ) % totalImage
    $(images[NumberOfCurrentImage]).show()
})