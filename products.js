(function(){
    var app = angular.module('store-products', [ ]);

    // custom directive used like an include/mixin
    // a function placing a template html file into html
    app.directive('productDescription', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    // custom attribute directive for specs
    app.directive('productSpecs', function(){
        return {
            restrict: 'A',
            templateUrl: 'product-specs.html'
        };
    });

    // productPanels directive. has a template and a controller called as panel.setTab etc. This is kind of a _VC design pattern.
    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){
                this.tab = 1;
                // set the tab
                this.setTab = function(setTab){
                    this.tab = setTab;
                };
                // check if selected
                this.isSet = function(isSet){
                    return this.tab === isSet;
                };
            },
            controllerAs: 'panel'
        };
    });

    // review form directive. template has access to controller properties and methods via form._____
    app.directive('reviewForm', function(){
        return {
            restrict: 'E',
            templateUrl: 'review-form.html',
            controller: function(){
                this.show = false; // default review form hidden
                this.setShow = function(value){
                    this.show = value; // true or false
                };
                this.isShown = function(){
                    return this.show;
                };
            },
            controllerAs: 'form'
        };
    });

})();
