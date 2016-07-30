// put everything in a closure
(function(){

    // module
    var app = angular.module('gemStore', [ ]);

    // controller
    app.controller('StoreController', function(){
        this.products = gems;
    });

    // data object
    var gems = [
        {
            name: 'Azurite',
            price: 2.95,
            description: 'blah, blah, blah',
            canPurchase: false,
            soldOut: false,
            images: [
                'images/Ruby_logo.png'
            ]
        },{
            name: 'Beach Rock',
            price: 2,
            description: 'blah, blah, blah',
            canPurchase: true,
            soldOut: false,
            images: [
                'images/Ruby_logo.png'
            ]
        }, {
            name: 'Diamond',
            price: 99.99,
            description: 'blah, blah, blah',
            canPurchase: true,
            soldOut: false,
            images: [
                'images/Ruby_logo.png'
            ]
        }
    ];



})();
