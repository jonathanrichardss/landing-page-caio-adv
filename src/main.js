import {tns} from './tiny-slider.js'; 


var slider = tns({
    container: '.my-slider',
    autoplay: true,
    axis: 'vertical',
    gutter: 0,
    edgePadding: 0,
    items: 1,
    center: true,
    mode: 'carousel',
    slideBy: 1,
    mouseDrag: true,
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    stopButton: false,
    lazyload: true,
    loop: false,
    autoWidth: true,
    autoHeight: false,
    touch: true,
    arrowKeys: true,
    swipeAngle: true,
    preventActionWhenRunning: false,
    responsive: {
      340: {


      },
      740: {
        items: 1,
        gutter: 15,
        autoWidth: true,
        autoHeight: true,
        touch: true,
        arrowKeys: true,
        swipeAngle: true,
        loop: true,
        center: true
      },
      900: {

      }
    }
  });
































































//const reviewsDiv = document.getElementById('reviews');

// jQuery(document).ready(function( $ ) {
//     $(reviewsDiv).googlePlaces({
//         placeId: 'ChIJhRwgQ18erAcRUa-mOuxqZck',
//         render: ['reviews'],
//         min_rating: 4,
//         max_rows: 4
//     });
// }); 

//https://mybusiness.googleapis.com/v4/accounts/${userId}/locations/ChIJhRwgQ18erAcRUa-mOuxqZck/reviews

//https://mybusiness.googleapis.com/v4/parent=accounts/18323662979610677377/locations/Souza-Advocacia-Advocacia-Previdenciaria/reviews

/* function getUserReview(userId) {
    const userData = fetch(`https://mybusiness.googleapis.com/v4/accounts/${userId}/locations/ChIJhRwgQ18erAcRUa-mOuxqZck/reviews`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => "Erro, tente novamente")
}


getUserReview('18323662979610677377'); */
