import {tns} from './src/tiny-slider.js'; 


var slider = tns({
    container: '.my-slider',
    autoplay: true,
    gutter: 0,
    edgePadding: 50,
    items: 5,
    center: true,
    mode: 'carousel',
    slideBy: 1,
    mouseDrag: true,
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    stopButton: false,
    lazyloading: true,
    loop: true,
    fixedWidth: 450,
    autoWidth: true,
    autoHeight: true,
    touch: true,
    arrowKeys: true,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 1
      },
      740: {
        edgePadding: 10,
        gutter: 10,
        items: 1,
        fixedWidth: 600,
        autoWidth: true,
        autoHeight: true,
      },
      900: {
        edgePadding: 20,
        gutter: 20,
        items: 1
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
