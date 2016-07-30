// put everything in a closure
(function(){
    // data object
    var gem = { name: 'Azurite', price: 2.95 };
    // module
    var app = angular.module('gemStore', [ ]);

    // controller
    app.controller('StoreController', function(){
        this.product = gem;
    });



})();
