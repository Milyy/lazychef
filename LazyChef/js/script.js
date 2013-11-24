
$(document).ready(function(){
	// Cache the Window object
	$window = $(window);
                
   $('div[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		
}); // window scroll Ends

 });	

}); 

$(function(){
    $("#guestlistLink").click(function(e){
        $("body").animate({scrollTop: $("#guestlist").offset().top}, 1200);
        e.preventDefault();
    });
    $("#ticketsLink").click(function(e){
        $("body").animate({scrollTop: $("#tickets").offset().top}, 1200);
        e.preventDefault();
    });
    $("#logo").click(function(e){
        $("body").animate({scrollTop: $("body").offset().top}, 1200);
        e.preventDefault();
    });
    $("#arrowLink").click(function(e){
        $("body").animate({scrollTop: $("#guestlist").offset().top}, 1200);
        e.preventDefault();
    });
    $("#guestlistArrowLink").click(function(e){
        $("body").animate({scrollTop: $("#tickets").offset().top}, 1200);
        e.preventDefault();
    });
    $("#ticketsArrowLink").click(function(e){
        $("body").animate({scrollTop: $("#slide4").offset().top}, 1200);
        e.preventDefault();
    });
});