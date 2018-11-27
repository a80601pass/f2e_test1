$(document).ready(function() {

	$(".frontbar a").hover(function () { 
        $(this).addClass("add");
    },function(){
        $(this).removeClass("add");
    });
    
    $(".bottombar a").hover(function () { 
        $(this).addClass("add");
    },function(){
        $(this).removeClass("add");
    });
});