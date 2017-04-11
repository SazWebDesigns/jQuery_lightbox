//Problem: User when clicking on image goes to dead end
//Solution:create an overlay with the large image - Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
//2.1 An image
$overlay.append($image);

$overlay.append($caption);
//2. Add overlay
$("body").append($overlay);
   
   //2.2 A caption

//1.Capture the click on a link to an image
$("#imageGallery a").click (function(event){
   event.preventDefault();
  var imageLocation=  $(this).attr("href");   
  
   //1.2 Update overlay withthe image linked in the link
      $image.attr("src", imageLocation);                     
   //1.1 Show the overlay
   $overlay.show();
   
   //1.3 Get child's alt atteribute and set caption.
    var captionText = $(this).children("img").attr("alt");
$caption.text(captionText);
   });
  
//3. When overlay is clicked
$overlay.click(function() {
$overlay.hide();
});
   //3,1 hide the pverlay