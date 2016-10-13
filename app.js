// put everything in a closure
(function(){
    // module
    var app = angular.module('gemStore', ['store-products']);

    // add dependencies array to this controller... AND to the function
    app.controller('StoreController',  ['$http', '$scope', 'productService', function($http, $scope, productService){
        var store = this; // creat variable for controller so we can put data in a products variable belonging to it
        store.products = [ ];

        // IF RUNNING LOCALLY USE THIS PATH
        $http.get('/products.json').success(function(data){

        // IF RUNNING ON GITHUB PAGES USE THIS PATH
        //  $http.get('products.json').success(function(data){

            console.log(data);
            store.products = data;
            sendDataToService(data); // so avail. in other ctrlrs



            ////////////////////////////////////
            // PASTED FROM MAPS CONTROLLER
            ////////////////////////////////////

            var productsData = productService.getProducts();
            console.log(productsData);

            var mapOptions = {
              zoom: 4,
              center: new google.maps.LatLng(25,80),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            $scope.markers = [];
            var infoWindow = new google.maps.InfoWindow();
            var createMarker = function (info){
                var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: new google.maps.LatLng(info.lat, info.long),
                    title: info.place
                });
                marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

                google.maps.event.addListener(marker, 'click', function(){
                  infoWindow.setContent('<h2>' + marker.title + '</h2>' +
                    marker.content);
                  infoWindow.open($scope.map, marker);
                });

                $scope.markers.push(marker);
            }  ;

            for (i = 0; i < cities.length; i++){
              createMarker(cities[i]);
            }

            $scope.openInfoWindow = function(e, selectedMarker){
              e.preventDefault();
              google.maps.event.trigger(selectedMarker, 'click');
            };
            // END STUFF PASTED FROM MAPS CONTROLLER 



        });

        function sendDataToService(x){
            console.log(x);
            $scope.productData = productService.addProducts(x);
        }



        // console.log(store.products);
        // var productData = store.products;
        // console.log(productData);
        //
        // $scope.callToAddToProductList = function(data){
        //     productService.addProducts(data);
        // };

    }]);

    // service to get and provide shared data among controllers
    app.service('productService', function(){
        var productList = [];

        // define data variable and functions to add data to it
        // and get the data in it. then return those the setter and getter
        var addProducts = function(data){
            productList = data;
            console.log(productList);
        };
        var getProducts = function(){
            return productList;
        };

        return {
            addProducts: addProducts,
            getProducts: getProducts
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

    // map controller
    app.controller('MapController', function ($scope, productService) {





        // var productsData = productService.getProducts();
        // console.log(productsData);
        //
        // var mapOptions = {
        //   zoom: 4,
        //   center: new google.maps.LatLng(25,80),
        //   mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        //
        // $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        // $scope.markers = [];
        // var infoWindow = new google.maps.InfoWindow();
        // var createMarker = function (info){
        //     var marker = new google.maps.Marker({
        //         map: $scope.map,
        //         position: new google.maps.LatLng(info.lat, info.long),
        //         title: info.place
        //     });
        //     marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';
        //
        //     google.maps.event.addListener(marker, 'click', function(){
        //       infoWindow.setContent('<h2>' + marker.title + '</h2>' +
        //         marker.content);
        //       infoWindow.open($scope.map, marker);
        //     });
        //
        //     $scope.markers.push(marker);
        // }  ;
        //
        // for (i = 0; i < cities.length; i++){
        //   createMarker(cities[i]);
        // }
        //
        // $scope.openInfoWindow = function(e, selectedMarker){
        //   e.preventDefault();
        //   google.maps.event.trigger(selectedMarker, 'click');
        // };
    }); // end MapController

    var cities = [
        {
          place : 'India',
          desc : 'A country of culture and tradition!',
          lat : 23.200000,
          long : 79.225487
        },
        {
          place : 'New Delhi',
          desc : 'Capital of India...',
          lat : 28.500000,
          long : 77.250000
        },
        {
          place : 'Kolkata',
          desc : 'City of Joy...',
          lat : 22.500000,
          long : 88.400000
        },
        {
          place : 'Mumbai',
          desc : 'Commercial city!',
          lat : 19.000000,
          long : 72.90000
        },
        {
          place : 'Bangalore',
          desc : 'Silicon Valley of India...',
          lat : 12.9667,
          long : 77.5667
        }
        ];

})();
