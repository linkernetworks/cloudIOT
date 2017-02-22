(function($) {
  $('a').click(function() {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function() {
        window.location.hash = hash;
      });
    }
  });
})( jQuery );