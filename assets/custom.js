// Build product page carousels
window.onload = function () {  
  init();
}
function init() {  
  if(window.Flickity){
    var mediaQuery = window.matchMedia('(max-width: 768px)');
    if(mediaQuery.matches){
        var key_features_carousel = document.querySelector('#key_features_carousel');
        var key_features_carousel_flkty = new Flickity( key_features_carousel, {
          // options
          cellAlign: 'left',
          contain: true,
          prevNextButtons: false,
          pageDots: true,
          draggable:true
        });

        var custom_carousels = document.querySelectorAll('.d-custom-carousel').forEach(elem=>{
            var flkty = new Flickity( elem, {
                prevNextButtons: true,
                pageDots: true,
                draggable:true
              });
        })

    }

  }else{
    setTimeout(() => {
      init();
    }, 500);
  }

}