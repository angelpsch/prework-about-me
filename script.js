// I am new to jQuery, so don't judge!

$(document).ready(function(){
    $('#reveal').hide(); 
    $('#answers').on('click', function(event) {        
        $('#reveal').toggle('show');
    });
   
});
 
$(document).ready(function(){
$("a").on('click', function(event) {
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            }); 
        } //end if
    });
});