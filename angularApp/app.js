// put everything in a closure
(function(){
    // module
    var app = angular.module('gemStore', ['store-products']);

    // add dependencies array to this controller...
    app.controller('StoreController', [ '$http', function($http){
        var store = this; // creat variable for controller so we can put data in a products variable belonging to it
        store.products = [ ];

        // IF RUNNING LOCALLY USE THIS PATH
        $http.get('/products.json').success(function(data){

        // IF RUNNING ON GITHUB PAGES USE THIS PATH
        //  $http.get('products.json').success(function(data){

            console.log(data);
            store.products = data;
        });
    }]);

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

})();
