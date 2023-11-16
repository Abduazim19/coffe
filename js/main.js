let a = document.getElementsByClassName(swiper-slide)

fetch(`https://kinsta.com/wp-content/uploads/2021/11/back-end-developer.png`) 
    .then(response => response.json()) 
    .then(json => {console.log(json)})          