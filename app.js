
var shop = [
  {
    title: 'Dogs - Mixed Breeds',
    image: './img/roi-dimor-4Tx3p2DT4F4-unsplash.jpg',
    price: '90 - $200',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus. An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Cats - Domestic Shorthair',
    image: './img/leiada-krozjhen-YrNYR3vr73w-unsplash.jpg',
    price: '90 - $200',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Ball Pythons',
    image: './img/fidias-cervantes-oHW-2VFNg-Q-unsplash.jpg',
    price: '75 - $150',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Fancy Ball Pythons',
    image: './img/timothy-dykes-SGW7enB7bl0-unsplash.jpg',
    price: '300',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Leopard Geckos',
    image: './img/andrey-tikhonovskiy-BbXxbbbTmRc-unsplash.jpg',
    price: '80 - $200',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus. An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Budgies',
    image: './img/budgie-photo.jpg',
    price: '80 - $200',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Finches',
    image: './img/zebra-finches.webp',
    price: '80 - $200',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Rabbits',
    image: './img/aswathy-n-srMHHWCTvcU-unsplash.jpg',
    price: '80 - $200',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Clown Fish',
    image: './img/jw-QXWnYUPHDvc-unsplash.jpg',
    price: '80',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Starfish',
    image: './img/david-clode-xTj9uJxJBXY-unsplash.jpg',
    price: '120',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus. An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus. An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Pleco',
    image: './img/pleco.jpg',
    price: '60',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object
  {
    title: 'Snails',
    image: './img/magda-vrabetz-tV4U7sJ0IVI-unsplash.jpg',
    price: '40 - $60',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  }, //this is one object

  {
    title: 'Frogs',
    image: './img/david-clode-UBN5a4IA3bk-unsplash.jpg',
    price: '80',
    description: 'An nec perpetua assentior, no usu euismod oporteat voluptatum, civibus.'
  } //this is one object

]

var postHTML = " "



for (var i = 0; i < shop.length; i++) {
  var heading = '<div class="col-3 justify-content-center mt-5 fw-bolder" ' + '"><span><h3>' + shop[i].title + '</h3>'
  var image = '<img class="img-fluid justify-content-center marketIMG py-4 px-4" src="' + shop[i].image + '"/>'
  var price = '<p> $' + shop[i].price + '</p></span>'
  var description = '<p class="text-center">' + shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
  var concatThis = heading + image + price + description;
  postHTML = postHTML + concatThis
}

document.getElementById('market').innerHTML = postHTML

