(function($) {
jQuery.fn.doParallax = function() {
   return this.each(function() {
      var $image = $(this);

      $(window).scroll();

      $(window).scroll(function (){
         var scrollPos = $(this).scrollTop();
         var offset = (scrollPos - $image.offset().top + $image.height())/$image.height();
         $image.css("background-position", '50% '+offset*50+'%');
      });
   });
};
})(jQuery);

$(document).ready(function() {
   $('.Parallax1').doParallax();
   $('.Parallax2').doParallax();
});
