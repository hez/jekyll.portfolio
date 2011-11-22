function loadPrevImage() {
  if( current_image_viewed - 1 >= 0 ) {
    current_image_viewed -= 1;
    updateImageHash( current_image_viewed );
  }
}
function loadNextImage() {
  if( current_image_viewed + 1 < portfolio_images.length ) {
    current_image_viewed += 1;
    updateImageHash( current_image_viewed );
  }
}

function loadImage( index ) {
  current_image_viewed = index;
  $('#portfolio_image').attr( 'src', portfolio_images[index].src );
  $('#portfolio_thumbs a').children('.active').css( 'z-index', '5' );
  $('#image_thumb_'+index).children( '.active' ).css( 'z-index', '15' );
}

function updateImageHash( index ) {
  window.location.hash = "#" + index;
}

// left + right arrows
$(document).keydown( function(e){
  if( !e.metaKey ) {
    // left
    if( e.keyCode == 37 )
      loadPrevImage();
    // right
    else if( e.keyCode == 39 )
      loadNextImage();
  }
});

// preload images
$(document).ready( function(){
  $.each( images_array, function(i,v) {
    portfolio_images[i] = new Image();
    portfolio_images[i].src = v;

    $('#portfolio_thumbs').append( "<div>" +
          "<a index=\"" + i + "\" id=\"image_thumb_" + i + "\">" +
            "<img class=\"active\" src=\"/images/thumb-active.png\" style=\"z-index: 15\" />" +
            "<img class=\"inactive\" src=\"/images/thumb-inactive.png\" />" +
          "</a>" +
        "</div>");
  });

  // Portfolio thumb hover effect
  $('#portfolio_thumbs img.inactive').hover( function(){
      $(this).stop().animate( {opacity: 0.2}, 100 );
    }, function(){
      $(this).stop().animate( {opacity: 1}, 1500 );
  });

  // Handle clicking on the main image, load up next
  $('#portfolio_container a').click( function(event){
    loadNextImage();
    event.preventDefault();
  });

  // Handle clicking on the thumbnails
  $('#portfolio_thumbs a').click( function(event){
    index = $(this).attr('index');
    updateImageHash( index );
    event.preventDefault();
  });

  // Hash change event, load the image on hash change
  $(window).hashchange( function(){
    loadImage( parseInt(window.location.href.replace(/.*#(.*)$/, '$1')) );
  });

  if( window.location.href.indexOf('#') == -1 )
    updateImageHash( 0 )
  else
    $(window).hashchange();
});
