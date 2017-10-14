;(function(){
    // sidebar mobile 
    var menuBtn =$('.menu-btn');
    var body =$('body');
    var mobileSidebarClass = '_mobileSidebar';
    var mobileBreakPoint = 1280;
    var openInmobileClass = '_openInmobile';

    menuBtn.on('click', function(e){
        var width = $(window).width();
        body.toggleClass(mobileSidebarClass);
        if(width < mobileBreakPoint){
            body.toggleClass(openInmobileClass);
        }
    });

    $(window).on('resize load', function(e){
        var width = $(this).width();

        if(width < mobileBreakPoint && !body.hasClass(openInmobileClass)){
            body.addClass(mobileSidebarClass);
        } else if(width > mobileBreakPoint){
            body.removeClass(mobileSidebarClass);
            body.removeClass(openInmobileClass);
        }
    });

// loader hide
var loader = $('#loading');

$(window).on('load', function(e){
    loader.addClass('hide');
});

//dropdown menu
var dropdownWrap = $('.dropdown-wrap');

dropdownWrap.on('click', function(e){
    e.preventDefault();
    var dropdown = $(this).find('.dropdown-menu');
    dropdown.slideToggle();
});
// // textarea (placeholder)
// $(document).on('input', '#textArea', function () {
	
//         if ($('#textArea').val()) {
//             $('#placeholderDiv').hide();
//         } else {
//             $('#placeholderDiv').show();
//         }
	       
// });

})();