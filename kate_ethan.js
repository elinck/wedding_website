$(document).ready(function(){

//fade in titles and top bar
    //$("#titlebox").fadeIn(3000);
    //$("#infobar").fadeIn(3000);
    
//click top buttons to scroll to relevant sections//
    $("#wedding").click(function() {
        $("body,html").animate({
            scrollTop: $("#wed-h1").offset().top},800);
    });
    
    $("#directions").click(function() { 
        $("body,html").animate({
            scrollTop: $("#dir-h1").offset().top},800); 
    });
    
    $("#sleeping").click(function() {
        $("body,html").animate({
            scrollTop: $("#sleep-h1").offset().top},800);
    });
    
    $("#food").click(function() {
        $("body,html").animate({
            scrollTop: $("#food-h1").offset().top},800);
    });
    
    $("#contact").click(function() {
        $("body,html").animate({
            scrollTop: $("#contact-h1").offset().top},800);
    });
});