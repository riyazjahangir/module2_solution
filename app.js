(function(){
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var tobuy = this;
        tobuy.items = ShoppingListCheckOffService.getitem1();

        tobuy.buy = function(index){
            ShoppingListCheckOffService.Buy(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadybought = this;
        alreadybought.items = ShoppingListCheckOffService.getitem2();
    }

    
    function ShoppingListCheckOffService(){
        var service = this;

        var tb = [{name : 'Cookies',quantity : 10},{name : 'pipto besmol',quantity : 5},{name : 'chips',quantity : 4},
                    {name : 'chocolates',quantity : 7},{name : 'cola',quantity : 5}];
          
        var ab = [];          
        service.getitem1 = function(){
            return tb;
        }

        service.getitem2 = function(){
            return ab;
        }

        service.Buy = function(index){
           ab.push(tb[index]);
           tb.splice(index,1);
           console.log(ab,tb);
        }

    }
})();