$(document).ready(function(){

    // handle navigation

    $(".droper").click(function(){
        $(".nav-sm-dropdown").css("width","100%");
    });
    $(".closenav").click(function(){
        $(".nav-sm-dropdown").css("width","0");
    });
    $(".closers").click(function(){
        $(".nav-sm-dropdown").css("width","0");
    });

    // handle shadow for bavbar scroll
    var navLarge = $('.nav-lg'); 
    var navSmall = $('.nav-sm');
    var threshold = 100; // Change to pixels scrolled

    $(window).scroll(function () {
        var distance = $(this).scrollTop();
        if (distance > threshold) { // If scrolled past threshold
            navLarge.addClass("shadow-bottom");
            navSmall.addClass("shadow-bottom");
        } else { // If user scrolls back to top
            if (navLarge.hasClass("shadow-bottom")) { // And if class has been added
                navLarge.removeClass("shadow-bottom"); // Remove it
            }
            if (navSmall.hasClass("shadow-bottom")) { // And if class has been added
                navSmall.removeClass("shadow-bottom"); // Remove it
            }
        }

        
    });
})