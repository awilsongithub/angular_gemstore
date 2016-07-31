// put everything in a closure
(function(){

    // module
    var app = angular.module('gemStore', [ ]);

    // controller
    app.controller('StoreController', function(){
        this.products = gems;
    });

    // panel controller
    app.controller('PanelController', function(){
        this.tab = 1;
        // set the tab
        this.setTab = function(setTab){
            this.tab = setTab;
        };
        // check if selected
        this.isSet = function(isSet){
            return this.tab === isSet;
        };
    });

    // controller to handle review data, form submissions
    app.controller('ReviewController', function(){
        this.review = {};
        // pass product (gem) object so we can push onto reviews array
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {}; // clear form
        };
    });

    // custom directive used like an include/mixin
    // a function placing a template html file into html
    app.directive('productDescription', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });


    // data object
    var gems = [
        {
            name: 'Azurite',
            price: 2.95,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            canPurchase: false,
            soldOut: false,
            images: [
                'images/Ruby_logo.png'
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product so much.",
                    author: 'adam@adam.com'
                },{
                    stars: 5,
                    body: "I love this product so much.",
                    author: 'adam@adam.com'
                }
            ]
        },{
            name: 'Beach Rock',
            price: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            canPurchase: true,
            soldOut: false,
            images: [
                'images/Ruby_logo.png'
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product so much.",
                    author: 'adam@adam.com'
                },{
                    stars: 5,
                    body: "I love this product so much.",
                    author: 'adam@adam.com'
                }
            ]
        }, {
            name: 'Diamond',
            price: 99.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            canPurchase: true,
            soldOut: false,
            images: [
                'images/Ruby_logo.png'
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product so much.",
                    author: 'adam@adam.com'
                },{
                    stars: 5,
                    body: "I love this product so much.",
                    author: 'adam@adam.com'
                }
            ]
        }
    ];



})();
