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

    // gallery controller
    

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
            ]
        },{
            name: 'Beach Rock',
            price: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            canPurchase: true,
            soldOut: false,
            images: [
                'images/Ruby_logo.png'
            ]
        }, {
            name: 'Diamond',
            price: 99.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            canPurchase: true,
            soldOut: false,
            images: [
                'images/Ruby_logo.png'
            ]
        }
    ];



})();
