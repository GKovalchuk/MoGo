$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    checkScroll(scrollOffset);
    
    // fixed Header 
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {

        if ( scrollOffset >= introH) {
            header.addClass("fixed");
            }  else {
                header.removeClass("fixed");
        }
    }
    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;
        $("#nav a").removeClass("active");
        $this.addClass("active");
        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    // Burger menu
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");
    });

    // Collapse
    $("[data-collapse]").on("click",function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("collapse")
        
        $(blockId).slideToggle();
        $this.toggleClass('active');

    });
    // Slider
    $('[data-slider]').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});